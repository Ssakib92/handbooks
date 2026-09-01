# Section 4 — Deep Reinforcement Learning

# From Q-Tables to Neural Networks

---

# Chapter Overview

In the previous section, we learned how an RL agent stores its knowledge in a **Q-table**.

For small environments, this works beautifully.

However, for real engineering problems—such as MTJ optimization, robotics, autonomous vehicles, or molecular design—a Q-table becomes impossibly large.

This section introduces one of the most important breakthroughs in Artificial Intelligence:

> **Deep Reinforcement Learning (Deep RL)**

Instead of storing millions or trillions of values in a table, we use a **deep neural network** to approximate the Q-function.

This seemingly simple idea led to some of the biggest achievements in AI:

* DeepMind's Atari-playing agent (2013)
* AlphaGo
* AlphaZero
* MuZero
* Robotics
* Autonomous driving
* Chip optimization
* Scientific discovery

By the end of this section, you will understand:

* Why Q-learning breaks down for large problems
* Function approximation
* Neural networks as value approximators
* Deep Q-Networks (DQN)
* Experience Replay
* Replay Buffer
* Target Networks
* The DQN training process
* Double DQN
* Dueling DQN
* Prioritized Experience Replay
* Why DQN is still limited
* Why modern methods (PPO, SAC, TD3) were developed

Unlike previous sections, we will begin using **PyTorch**, because Deep RL is built on deep learning.

---

# 4.1 Why Q-Learning Stops Working

Recall the Q-table.

| State | Left | Right |
| ----- | ---- | ----- |
| S1    | 5    | 10    |
| S2    | 2    | 8     |
| S3    | 7    | 3     |

The table works because there are only a few states.

Now imagine your MTJ optimization.

Possible variables:

```text
Ms

Ku

Alpha

Diameter

Thickness

Current Density

Temperature

Pulse Width

Voltage

Resistance

Switching Probability

Energy

Entropy

KL Divergence
```

Each variable is continuous.

There are essentially **infinitely many states**.

A Q-table would require:

```
Infinite memory
```

Clearly impossible.

---

# 4.2 The Curse of Dimensionality

Suppose

10 parameters

Each has

1000 possible values

Total states

$$
1000^{10}
=
10^{30}
$$

Now suppose

Each state has

20 actions

Total Q-values

$$
20\times10^{30}
=
2\times10^{31}
$$

Even storing one byte per value would require far more memory than exists on Earth.

This is called

> **The Curse of Dimensionality**

It is the primary reason why tabular RL cannot solve realistic problems.

---

# 4.3 The Key Idea: Function Approximation

Instead of storing

```text
State

↓

Lookup Table

↓

Q-value
```

we learn a mathematical function

```text
State

↓

Function

↓

Q-value
```

Instead of memorizing every state,

the model learns patterns.

---

## Analogy

Imagine a teacher.

Student A memorizes

```
2+2=4

2+3=5

2+4=6
```

Student B understands addition.

Student B can solve

```
531+874
```

without memorizing it.

A neural network behaves like Student B.

It learns the underlying relationship rather than memorizing every state.

---

# 4.4 Function Approximation in RL

Instead of

$$
Q(s,a)
=
\text{Table Lookup}
$$

we approximate

$$
Q(s,a)
\approx
Q(s,a;\theta)
$$

where

\(\theta\)

represents the neural network parameters (weights and biases).

The network receives the current state and predicts the value of each possible action.

---

# 4.5 Neural Networks Refresher

Suppose the state is

```text
Ms

Ku

Alpha

Diameter

Temperature

Pulse Width
```

These become the input vector.

```text
Input Layer

↓

Hidden Layer

↓

Hidden Layer

↓

Output Layer
```

Output:

```text
Q(Left)

Q(Right)

Q(Stay)
```

The highest output determines the selected action.

---

# 4.6 Deep Q-Network (DQN)

In 2013, DeepMind introduced the **Deep Q-Network (DQN)**.

The idea is surprisingly simple.

Replace the Q-table with a neural network.

Instead of

```text
Q-table
```

we use

```text
State

↓

Deep Neural Network

↓

Q-values
```

This allows the agent to generalize to previously unseen states.

---

# 4.7 DQN Architecture

Suppose we have

State

```text
Ms

Ku

Alpha

Temperature
```

Network

```text
Input

↓

Dense Layer

↓

ReLU

↓

Dense Layer

↓

ReLU

↓

Output
```

Output

```text
Increase Ku

Decrease Ku

Increase Pulse Width

Decrease Pulse Width
```

Each output is one Q-value.

The agent simply selects

```python
action = argmax(Q)
```

---

# 4.8 Why Naive Deep Q-Learning Fails

Suppose we directly replace the Q-table with a neural network.

Training becomes unstable.

Why?

Because

The network is trying to predict targets that are themselves changing.

It is like trying to hit a moving target.

Example

Week 1

Predict

```text
Q = 10
```

Week 2

Network updates

Target changes

```text
Q = 13
```

Week 3

Target changes again

Training oscillates.

Sometimes it diverges completely.

DeepMind introduced two key innovations to stabilize learning.

---

# 4.9 Experience Replay

Imagine learning to drive.

After every mistake,

would you immediately forget all previous experiences?

Of course not.

Instead,

you remember many experiences.

RL uses the same idea.

Every interaction

```text
State

Action

Reward

Next State
```

is stored.

This collection is called the

> **Replay Buffer**

---

## Why Replay Helps

Without replay

Training samples

```text
Experience 1

Experience 2

Experience 3
```

are highly correlated.

Neural networks dislike correlated data.

Replay randomly shuffles experiences.

```text
Experience 15

Experience 3

Experience 102

Experience 41
```

Now training resembles supervised learning,

making optimization much more stable.

---

# 4.10 Replay Buffer

A replay buffer is simply a memory.

It stores experiences.

Each experience contains

```text
(s,a,r,s')
```

or, more explicitly:

* Current State
* Action
* Reward
* Next State
* Done flag (whether the episode ended)

During training,

we randomly sample mini-batches from this buffer.

---

# 4.11 Target Network

The second innovation in DQN is the **Target Network**.

Instead of using one neural network,

we use two.

### Online Network

Learns continuously.

### Target Network

Changes only occasionally.

```text
Online Network

↓

Train Every Step

---------------

Target Network

↓

Copy Every 1000 Steps
```

This stabilizes the target values used during training.

---

# 4.12 DQN Training Cycle

The training loop is:

```text
Observe State

↓

Predict Q-values

↓

Choose Action

↓

Interact with Environment

↓

Receive Reward

↓

Store Experience

↓

Sample Random Batch

↓

Update Online Network

↓

Occasionally Copy Weights

↓

Repeat
```

This cycle repeats millions of times during training.

---

# 4.13 PyTorch Example: Building a DQN Network

Let's define a simple DQN model.

```python
import torch
import torch.nn as nn

class DQN(nn.Module):

    def __init__(self, state_size, action_size):
        super().__init__()

        self.network = nn.Sequential(

            nn.Linear(state_size, 128),
            nn.ReLU(),

            nn.Linear(128, 128),
            nn.ReLU(),

            nn.Linear(128, action_size)
        )

    def forward(self, x):
        return self.network(x)
```

Suppose

```python
state_size = 6
action_size = 4

model = DQN(state_size, action_size)
```

Input

```python
state = torch.randn(1,6)
```

Predict

```python
Q = model(state)

print(Q)
```

Example output

```text
tensor([[ 0.31,
          1.52,
         -0.20,
          0.85]])
```

The agent chooses

```python
action = torch.argmax(Q)
```

---

# 4.14 Double DQN

Standard DQN has a problem.

It often **overestimates** action values.

Suppose

Real value

```
10
```

Prediction

```
14
```

Repeated overestimation hurts learning.

Double DQN solves this by separating:

* Action selection
* Action evaluation

This simple change greatly improves stability.

---

# 4.15 Dueling DQN

Sometimes

the agent only needs to know

whether a state is good,

regardless of action.

Example

Goal state

Every action

is almost equally good.

Instead of directly predicting

Q-values,

Dueling DQN separates

```text
State Value

+

Action Advantage
```

This allows faster learning.

---

# 4.16 Prioritized Experience Replay

Normal replay samples experiences randomly.

But not every experience is equally useful.

Suppose

Experience A

Huge mistake.

Experience B

Routine movement.

Clearly,

Experience A teaches more.

Prioritized Replay samples

important experiences

more frequently.

Result

* Faster learning.
* Better sample efficiency.

---

# 4.17 Why DQN Changed AI

Before DQN,

RL worked mainly on toy problems.

DeepMind demonstrated that one algorithm could learn to play dozens of Atari games directly from raw pixels, using the same neural network architecture and training procedure.

This success showed that deep neural networks could replace handcrafted state representations and opened the door to many modern Deep RL algorithms.

---

# 4.18 Why DQN Is Still Not Enough

Despite its success,

DQN has important limitations.

### 1. Discrete Actions Only

DQN assumes

```text
Action 1

Action 2

Action 3
```

It cannot directly output

```text
Current Density = 2.47×10¹¹ A/m²
```

Many scientific optimization problems require continuous actions.

---

### 2. Difficult Optimization

Training DQN can be unstable.

Hyperparameters such as learning rate, replay buffer size, and target update frequency require careful tuning.

---

### 3. Continuous Control

Robotics

MTJ optimization

Process control

Material optimization

often require continuous parameter adjustments.

Policy-gradient and actor-critic methods are usually more suitable.

---

# 4.19 DQN and Your MTJ Project

Could we use DQN?

Yes—but only under certain conditions.

If the actions are discrete, for example:

```text
Increase Ku by 2%

Decrease Ku by 2%

Increase Alpha by 1%

Decrease Alpha by 1%

Increase Pulse Width

Decrease Pulse Width
```

then DQN is a reasonable choice.

However, if the agent must output exact continuous parameter values, algorithms such as PPO, SAC, or TD3 are generally a better fit.

---

# 4.20 Looking Ahead

Your MTJ optimization problem involves:

* Continuous parameters
* Multiple objectives
* Stochastic simulations
* Expensive evaluations

While DQN provides the conceptual bridge from tabular RL to deep RL, it is unlikely to be the final algorithm you use for your research.

Modern actor-critic methods are typically better suited to this type of scientific optimization.

---

# Summary

This section introduced the transition from tabular reinforcement learning to deep reinforcement learning.

The key ideas are:

* Q-tables cannot scale to high-dimensional or continuous state spaces.
* Neural networks can approximate the Q-function instead of storing every value explicitly.
* The **Deep Q-Network (DQN)** replaces the Q-table with a neural network.
* **Experience Replay** breaks correlations between training samples by storing and randomly replaying past experiences.
* A **Replay Buffer** stores tuples of state, action, reward, next state, and termination status.
* A **Target Network** stabilizes training by providing slowly changing target values.
* **Double DQN**, **Dueling DQN**, and **Prioritized Experience Replay** address important shortcomings of the original DQN.
* DQN is highly effective for **discrete action spaces**, but continuous scientific optimization problems often require more advanced methods.

---

# Exercises

1. Explain why a Q-table is impractical for an optimization problem with millions of possible states.

2. In your own words, describe how a neural network generalizes better than a lookup table.

3. Why does training become unstable if the same network is used to compute both predictions and targets?

4. Explain the roles of:

   * Experience Replay
   * Replay Buffer
   * Target Network

5. For your MTJ optimization project, decide whether the following action spaces are better suited to DQN or to continuous-control algorithms:

   * Increase/decrease parameters by fixed steps.
   * Output exact values for current density, pulse width, and anisotropy simultaneously.
   * Select one of ten predefined device configurations.
   * Continuously optimize multiple material parameters.

In **Section 5**, we will leave value-based methods behind and study **Policy Gradient Methods**, which learn the policy directly and naturally support continuous action spaces. These methods form the conceptual foundation for modern algorithms such as PPO, SAC, TD3, and DDPG that are widely used in engineering optimization and are likely to be the most relevant for your MTJ research.
