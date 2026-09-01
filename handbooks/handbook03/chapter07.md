# Section 7 — Gymnasium and Environment Design

# Building a Reinforcement Learning Environment from Scratch

---

# Chapter Overview

Up to this point, we have learned **what RL is** and **how RL algorithms work**.

However, we have intentionally ignored one crucial question:

> **Where does the agent actually interact with the world?**

Every RL algorithm—whether DQN, PPO, or SAC—expects to interact with an **environment**.

The environment is responsible for:

* Maintaining the current state.
* Receiving actions from the agent.
* Simulating what happens next.
* Calculating rewards.
* Deciding when an episode ends.

This chapter teaches you how to build that environment.

This is arguably **the single most important chapter for your MTJ project**, because your existing MTJ simulator will become the RL environment.

By the end of this section, you will be able to:

* Understand the Gymnasium API.
* Design observation spaces.
* Design action spaces.
* Implement a custom environment.
* Connect an external simulator.
* Design rewards.
* Handle episode termination.
* Integrate with Stable-Baselines3.

After completing this chapter, you'll be able to transform almost any scientific simulator into an RL problem.

---

# 7.1 What is Gymnasium?

When researchers write RL algorithms, they don't want to write special code for every problem.

Imagine writing PPO separately for:

* Chess
* Robotics
* CartPole
* Atari
* Drone control
* MTJ optimization

That would be impossible.

Instead, everyone agrees on a **standard interface**.

Originally this was **OpenAI Gym**.

Today, the maintained successor is **Gymnasium**.

Think of Gymnasium as the RL equivalent of a USB port.

Every environment presents the same interface.

Every RL algorithm knows how to use it.

---

## Analogy

Imagine a laptop.

You can connect:

* Keyboard
* Mouse
* Flash drive
* Camera

Why?

Because they all follow the USB standard.

Gymnasium provides exactly this kind of standardization for reinforcement learning.

As long as your environment follows the Gymnasium API, algorithms like PPO and SAC can use it without modification.

---

# 7.2 The RL Pipeline

The interaction loop is:

```text
           Agent
             │
             ▼
        Choose Action
             │
             ▼
      +------------------+
      |   Environment    |
      |                  |
      | Update State     |
      | Compute Reward   |
      | Check Terminate  |
      +------------------+
             │
             ▼
  Next State, Reward, Done
             │
             └──────────────► Agent
```

The environment is the bridge between the RL algorithm and the real problem.

---

# 7.3 The Gymnasium API

Every Gymnasium environment implements the same core methods.

```python
class MyEnvironment(gym.Env):

    def __init__(self):
        ...

    def reset(self):
        ...

    def step(self, action):
        ...

    def render(self):
        ...

    def close(self):
        ...
```

Everything else is optional.

These five methods define the environment.

---

# 7.4 The Environment Lifecycle

Every episode follows the same sequence:

```text
Create Environment

↓

reset()

↓

Initial State

↓

step(action)

↓

Next State

↓

step(action)

↓

Next State

↓

...

↓

Episode Ends

↓

reset()

↓

New Episode
```

This pattern is universal across almost all RL environments.

---

# 7.5 The Observation Space

The **observation** (or state) is the information the environment gives to the agent.

For CartPole:

```text
Cart Position

Pole Angle

Cart Velocity

Pole Angular Velocity
```

For Chess:

```text
Current Board
```

For your MTJ project:

```text
Ms
Ku
Alpha
Diameter
Temperature
Pulse Width
Current Density
Resistance
Entropy
KL Divergence
Energy
```

This collection of values is called the **observation vector**.

---

# 7.6 Observation Space in Gymnasium

Gymnasium requires you to describe the format of the observation.

Example:

```python
self.observation_space = spaces.Box(
    low=-1,
    high=1,
    shape=(6,),
    dtype=np.float32
)
```

Meaning:

The observation is a vector of six floating-point numbers.

For your MTJ project:

```python
shape=(10,)
```

might represent:

```text
Ms
Ku
Alpha
Diameter
Temperature
Pulse Width
Current Density
Energy
Entropy
KL
```

---

# 7.7 Action Space

The action space defines what actions the agent is allowed to take.

There are two major types.

---

## Discrete Actions

Example:

```python
spaces.Discrete(4)
```

Possible actions:

```text
0

1

2

3
```

Perhaps:

```text
Increase Ku

Decrease Ku

Increase Alpha

Decrease Alpha
```

---

## Continuous Actions

Most engineering problems require continuous actions.

Example:

```python
spaces.Box(
    low=-1,
    high=1,
    shape=(4,)
)
```

The agent outputs:

```text
0.42

-0.17

0.81

0.09
```

These values can later be scaled into physical parameter ranges.

For MTJ optimization, continuous actions are usually the better choice.

---

# 7.8 Scaling Continuous Actions

Suppose the actor outputs:

```text
-1.0
```

to

```text
+1.0
```

But your simulator expects:

```text
Current Density

1×10¹¹

↓

5×10¹¹
```

You simply map one range to the other.

For example:

```text
Network Output

↓

Scale

↓

Physical Parameter
```

This keeps the neural network numerically stable while allowing it to control real-world quantities.

---

# 7.9 The `reset()` Function

Every episode begins with `reset()`.

Responsibilities:

* Initialize the environment.
* Reset counters.
* Randomize initial conditions (if desired).
* Return the initial observation.

Example:

```python
def reset(self):

    self.step_count = 0

    self.state = np.zeros(6)

    return self.state
```

For MTJ:

```text
Random Initial Parameters

↓

Initialize Simulator

↓

Return Initial State
```

---

# 7.10 The `step()` Function

This is the heart of the environment.

Every time the agent selects an action,

Gymnasium calls:

```python
step(action)
```

The function performs five tasks:

```text
Receive Action

↓

Run Simulation

↓

Update State

↓

Compute Reward

↓

Return Results
```

The method returns:

```python
observation,
reward,
terminated,
truncated,
info
```

---

# 7.11 Understanding the Return Values

### Observation

The next state.

---

### Reward

A single number measuring how good the action was.

Example:

```text
+5.2
```

---

### Terminated

True if the task naturally ended.

Examples:

* Goal reached
* Robot fell
* Desired MTJ performance achieved

---

### Truncated

True if the episode stopped because of an external limit.

Example:

```text
Maximum

100 Steps
```

---

### Info

Optional diagnostic information.

Example:

```python
{
    "entropy":0.998,
    "energy":3.2e-15
}
```

RL algorithms ignore this dictionary, but it is extremely useful for logging and debugging.

---

# 7.12 Reward Design

The reward is one of the most important design choices.

A poor reward often leads to poor learning.

Suppose your goals are:

* High entropy
* Low energy
* Low KL divergence
* Low delay

One possible reward:

```text
Reward

=

+Entropy

-Energy

-KL

-Delay
```

In practice, these quantities usually have different units and scales, so they should be normalized and weighted appropriately before combining them.

---

# 7.13 Episode Termination

When should the episode end?

Possible choices:

### Fixed Length

```text
50 Steps
```

---

### Target Achieved

```text
Entropy > 0.999

AND

KL < 0.001
```

---

### Failure

```text
Switching Failure

Device Breakdown

Simulation Error
```

The choice depends on the research objective.

---

# 7.14 Designing the MTJ Environment

Let's define the environment conceptually.

---

## Observation

```text
Ms

Ku

Alpha

Diameter

Temperature

Current Density

Pulse Width

Entropy

KL

Energy
```

---

## Action

Continuous:

```text
ΔMs

ΔKu

ΔAlpha

ΔCurrent Density

ΔPulse Width
```

The agent outputs **adjustments** rather than absolute values. This often makes learning smoother because changes between successive states are smaller and more structured.

---

## Environment

Your existing simulator:

```text
LLG Solver

↓

Thermal Noise

↓

Switching

↓

Random Bit Stream

↓

Evaluation
```

---

## Reward

Example:

```text
Higher Entropy

+

Lower Energy

+

Lower Delay

+

Lower KL
```

---

## Episode

One optimization trajectory.

Example:

```text
30

Simulation Steps
```

---

# 7.15 Environment Folder Structure

A clean project organization might look like this:

```text
mtj_rl/

│

├── env/

│      mtj_env.py

│

├── simulator/

│      mtj_device.py

│      llg_solver.py

│      thermal.py

│

├── reward/

│      reward.py

│

├── train.py

│

├── evaluate.py

│

└── models/
```

This separation keeps the RL logic independent from the simulator implementation.

---

# 7.16 A Skeleton Gymnasium Environment

Here is the minimal structure of a custom environment:

```python
import gymnasium as gym
from gymnasium import spaces
import numpy as np


class MTJEnvironment(gym.Env):

    def __init__(self):

        super().__init__()

        self.observation_space = spaces.Box(
            low=-1,
            high=1,
            shape=(10,),
            dtype=np.float32
        )

        self.action_space = spaces.Box(
            low=-1,
            high=1,
            shape=(5,),
            dtype=np.float32
        )

    def reset(self, seed=None, options=None):

        super().reset(seed=seed)

        state = np.zeros(10, dtype=np.float32)

        info = {}

        return state, info

    def step(self, action):

        # Run MTJ simulator here

        next_state = np.zeros(10)

        reward = 0.0

        terminated = False

        truncated = False

        info = {}

        return (
            next_state,
            reward,
            terminated,
            truncated,
            info
        )
```

Notice that this environment does not yet contain any MTJ-specific logic. Its purpose is to define the interface that every Gymnasium environment must follow.

---

# 7.17 Connecting Stable-Baselines3

Once your environment follows the Gymnasium API, training becomes remarkably simple.

```python
from stable_baselines3 import PPO

env = MTJEnvironment()

model = PPO(
    "MlpPolicy",
    env,
    verbose=1
)

model.learn(
    total_timesteps=100000
)
```

The PPO implementation does **not** need to know anything about MTJs, LLG equations, or spintronics.

It only interacts with the environment through:

* `reset()`
* `step()`

This separation of concerns is one of Gymnasium's greatest strengths.

---

# 7.18 Common Mistakes in Environment Design

Many RL projects struggle not because of the algorithm, but because of the environment.

Some common pitfalls include:

### 1. Incomplete State Representation

If the observation omits important variables, the agent cannot learn an effective policy.

---

### 2. Poor Reward Design

If the reward encourages the wrong behavior, the agent will optimize the wrong objective.

---

### 3. Incorrect Action Scaling

Actions must be mapped safely into valid physical parameter ranges.

---

### 4. Numerical Instability

Very large or very small observation values can make neural network training difficult. Normalize inputs whenever possible.

---

### 5. Expensive Simulations

Scientific simulations may take seconds or minutes per step. This makes sample efficiency and parallelization especially important.

---

# 7.19 Why This Matters for Your MTJ Project

This chapter represents the bridge between RL theory and your research.

Everything you have built so far:

* `MTJ_Device.py`
* LLG solver
* Thermal noise model
* Random bit generator
* Entropy calculations
* KL divergence evaluation

already forms the **physics engine**.

You do **not** need to rewrite it.

Instead, you wrap it inside a Gymnasium environment.

Conceptually:

```text
PPO

↓

Gymnasium Environment

↓

MTJ Simulator

↓

Reward

↓

PPO
```

The RL algorithm never directly manipulates your simulator. It only communicates through the standardized environment interface.

This modular design makes it easy to replace PPO with SAC or TD3 later without changing the simulator.

---

# Summary

Gymnasium provides a standardized interface between RL algorithms and environments.

A custom environment must define:

* **Observation Space**: what the agent observes.
* **Action Space**: what the agent controls.
* **`reset()`**: initialize a new episode.
* **`step(action)`**: execute one interaction and return the next state, reward, and termination information.

For your MTJ optimization project:

* The **environment** is your stochastic MTJ simulator.
* The **agent** is an RL algorithm such as PPO or SAC.
* The **reward** reflects device performance metrics such as entropy, KL divergence, energy, and delay.

Designing a well-structured environment is often more important than choosing a sophisticated RL algorithm.

---

# Exercises

1. Design a complete observation vector for your MTJ environment. Which quantities should be included, and why?

2. Decide whether your action space should consist of:

   * Absolute parameter values.
   * Relative parameter adjustments.
   * A hybrid of both.

3. Propose at least three different episode termination conditions suitable for MTJ optimization.

4. Sketch the implementation flow of `step(action)` using your existing simulator components.

5. Think about how you would normalize each observation variable (e.g., current density, pulse width, entropy) before passing it to a neural network.

---

## Important Note for the Remaining Tutorial

Everything up to this point has been **algorithm-agnostic**. The ideas apply regardless of which RL library you use.

From **Section 8 onward**, we will focus specifically on **your MTJ optimization project**. Rather than using toy examples like CartPole, we will design:

* a research-grade MTJ environment,
* a scientifically meaningful reward function,
* continuous action spaces for device parameter optimization,
* PPO/SAC training pipelines,
* experiment logging,
* and evaluation procedures suitable for publication-quality research.

This is where the tutorial transitions from learning reinforcement learning to **building an RL-driven MTJ optimization framework**.
