# Section 6 — Actor-Critic Algorithms

# Combining the Best of Value-Based and Policy-Based Reinforcement Learning

---

# Chapter Overview

By this point, we have studied two major families of reinforcement learning algorithms.

### Value-Based Methods

Examples:

* Q-Learning
* DQN
* Double DQN

They learn

$$
Q(s,a)
$$

and derive the policy indirectly.

Advantages:

* Stable for discrete actions
* Good sample efficiency

Disadvantages:

* Difficult for continuous actions
* Large action spaces become impractical

---

### Policy Gradient Methods

Examples:

* REINFORCE

They learn

$$
\pi(a|s)
$$

directly.

Advantages:

* Continuous actions
* Elegant mathematical formulation

Disadvantages:

* High variance
* Slow convergence
* Sample inefficient

---

Researchers naturally asked:

> **Can we combine the strengths of both approaches?**

The answer is:

> **Actor-Critic Algorithms**

Today, nearly every state-of-the-art RL algorithm belongs to the Actor-Critic family.

Examples:

* A2C
* A3C
* PPO
* DDPG
* TD3
* SAC

These are the algorithms used in:

* Robotics
* Autonomous vehicles
* Scientific optimization
* Semiconductor device optimization
* Industrial control
* Protein design
* Materials discovery

Most importantly,

**your MTJ optimization project will almost certainly use an Actor-Critic algorithm.**

---

# 6.1 The Big Idea

Instead of having one neural network,

we now use two.

```text
                Environment
                     ▲
                     │
             Reward, Next State
                     │
                     ▼
          +--------------------+
          |                    |
          |       Actor        |
          | (Chooses Action)   |
          |                    |
          +--------------------+
                     │
                   Action
                     │
                     ▼
          +--------------------+
          |                    |
          |       Critic       |
          | (Evaluates Action) |
          |                    |
          +--------------------+
```

One network

acts.

The other network

judges.

Hence the names:

Actor

and

Critic.

---

# 6.2 Why Two Networks?

Imagine teaching someone to play tennis.

The player

plays.

The coach

observes and says

```text
Good shot.

Bad swing.

Excellent serve.

Move your feet.
```

The player improves.

The coach does not play.

The coach evaluates.

Actor-Critic follows exactly the same philosophy.

---

# 6.3 Actor

The Actor's job is simple.

Input

```text
Current State
```

↓

Output

```text
Action
```

Example

Input

```text
Current MTJ Parameters
```

Output

```text
Current Density

Pulse Width

Ku
```

The Actor answers

> **What should I do?**

---

# 6.4 Critic

The Critic receives

```text
Current State

Chosen Action
```

and estimates

How good that decision was.

It answers

> **Was that a good decision?**

The Critic learns

either

$$
V(s)
$$

or

$$
Q(s,a)
$$

depending on the algorithm.

---

# 6.5 Actor-Critic Learning Cycle

The complete interaction is:

```text
Current State

↓

Actor chooses Action

↓

Environment Executes Action

↓

Reward

↓

Critic evaluates

↓

Actor updates Policy

↓

Repeat
```

Notice

The Critic never interacts with the environment.

It only evaluates.

---

# 6.6 Why Is This Better?

REINFORCE waited until

the episode ended.

Actor-Critic

updates almost immediately.

Advantages

✔ Faster learning

✔ Lower variance

✔ Continuous actions

✔ Better stability

---

# 6.7 Advantage Function Revisited

Recall

$$
A(s,a)
=
Q(s,a)-V(s)
$$

Interpretation

Positive

↓

Action better than expected

Negative

↓

Action worse than expected

Zero

↓

Exactly as expected

The Advantage Function becomes

one of the most important ideas

in modern RL.

Many algorithms

never directly use Q-values.

Instead

they learn

advantages.

---

# 6.8 Generalized Advantage Estimation (GAE)

Suppose

the Advantage estimates

are noisy.

GAE smooths

the estimates

by combining

short-term

and

long-term information.

Benefits

* Lower variance
* Better convergence
* More stable updates

GAE is one of the key reasons why **PPO** works so well.

---

# 6.9 A2C (Advantage Actor-Critic)

The simplest Actor-Critic algorithm.

Architecture

```text
State

↓

Actor

↓

Action

↓

Environment

↓

Reward

↓

Critic

↓

Advantage

↓

Update Actor
```

Features

* Synchronous
* Simple
* Stable
* Easier than PPO

Used mostly for education

and small research projects.

---

# 6.10 A3C (Asynchronous Advantage Actor-Critic)

Researchers noticed

training could be accelerated.

Instead of

one agent,

use many agents.

```text
Worker 1

Worker 2

Worker 3

Worker 4

↓

Shared Neural Network
```

Each worker

collects different experiences.

Benefits

* Faster exploration
* Better diversity
* Faster convergence

This algorithm

was historically important,

although today

PPO has largely replaced it.

---

# 6.11 PPO (Proximal Policy Optimization)

This is one of the most important RL algorithms ever developed.

If you only learn **one modern RL algorithm**, PPO is often the best place to start.

Developed by OpenAI,

PPO combines

* Simplicity
* Stability
* Excellent performance

It is widely used because it performs well across many domains without excessive tuning.

---

## Why Not Just Update the Policy Aggressively?

Suppose

old policy

```text
Left 50%

Right 50%
```

After one good reward

REINFORCE changes

```text
Left 2%

Right 98%
```

Too much.

The policy changes drastically.

Training becomes unstable.

PPO prevents

large policy updates.

It says

> Change,

but

not too much.

Hence

Proximal

Policy

Optimization.

---

# 6.12 PPO Intuition

Imagine steering a ship.

Bad strategy

```text
Turn wheel

90°
```

Ship becomes unstable.

Better strategy

```text
Turn

5°

Observe

Turn again

Observe
```

PPO follows

small safe updates.

Training becomes

extremely stable.

---

# 6.13 PPO Training Loop

```text
Collect Experience

↓

Compute Advantage

↓

Update Policy

↓

Clip Large Updates

↓

Update Critic

↓

Repeat
```

The clipping mechanism is the defining feature of PPO and prevents excessively large policy changes between updates.

---

# 6.14 DDPG (Deep Deterministic Policy Gradient)

Suppose

actions are continuous.

Example

```text
Current Density

2.47651×10¹¹
```

Not

```text
Increase

Decrease
```

DDPG extends

Actor-Critic

to continuous control.

Characteristics

✔ Continuous actions

✔ Deterministic Actor

✔ Replay Buffer

✔ Target Networks

You may notice that DDPG combines ideas from both DQN and Actor-Critic.

---

# 6.15 TD3 (Twin Delayed DDPG)

DDPG works well,

but

it often overestimates Q-values.

TD3 introduces

three improvements.

1.

Twin Critics

```text
Critic A

Critic B
```

Take the smaller estimate.

---

2.

Delayed Policy Updates

Update the Actor less frequently than the Critic.

---

3.

Target Policy Smoothing

Add small noise

during target computation

to make learning more robust.

Result

Much more stable than DDPG.

---

# 6.16 SAC (Soft Actor-Critic)

SAC is one of the strongest modern RL algorithms.

Key idea

Maximize

Reward

*

Entropy

Instead of only seeking high reward,

the agent is also encouraged to remain uncertain and exploratory during learning.

Benefits

✔ Continuous actions

✔ Very stable

✔ Excellent exploration

✔ Sample efficient

✔ Handles stochastic environments well

SAC is especially attractive when evaluations are expensive or noisy.

---

# 6.17 Comparing Modern Algorithms

| Algorithm | Action Space          | Stability | Sample Efficiency | Typical Use             |
| --------- | --------------------- | --------- | ----------------- | ----------------------- |
| A2C       | Discrete & Continuous | Medium    | Medium            | Teaching, simple tasks  |
| A3C       | Discrete & Continuous | Medium    | Medium            | Historical importance   |
| PPO       | Discrete & Continuous | Excellent | Good              | General-purpose RL      |
| DDPG      | Continuous            | Good      | Good              | Continuous control      |
| TD3       | Continuous            | Very Good | Very Good         | Precision control       |
| SAC       | Continuous            | Excellent | Excellent         | Scientific optimization |

---

# 6.18 Which Algorithm Should You Choose?

This depends on your problem.

### If actions are discrete

Choose

```text
DQN

or

PPO
```

---

### If actions are continuous

Choose

```text
PPO

SAC

TD3
```

---

### If the environment is noisy

Choose

```text
SAC
```

---

### If robustness matters

Choose

```text
PPO
```

---

# 6.19 Applying Actor-Critic to MTJ Optimization

Let's formulate your optimization problem.

---

## State

```text
Ms

Ku

Alpha

Diameter

Temperature

Current Density

Pulse Width

Entropy

KL Divergence

Energy
```

---

## Actor Output

Instead of

```text
Increase Ku
```

the Actor outputs

```text
Ku = 0.724 MJ/m³

Current Density = 2.47×10¹¹

Pulse Width = 1.84 ns

Alpha = 0.021
```

These are continuous parameter values or continuous adjustments.

---

## Environment

Your

```text
MTJ Simulator

↓

LLG Solver

↓

Thermal Noise

↓

Random Bit Generation

↓

Entropy

KL

Energy

Delay
```

The environment returns the next state and a reward based on the simulation outcome.

---

## Critic

The Critic estimates

How good

those parameters are

in terms of expected future reward.

---

## Reward

For example,

```text
Higher Entropy

↓

Higher Reward

----------------

Lower Energy

↓

Higher Reward

----------------

Higher KL

↓

Lower Reward

----------------

Switch Failure

↓

Large Penalty
```

---

# 6.20 PPO vs SAC for MTJ

This is a question many researchers would ask.

Let's compare them specifically for your application.

| Feature                    | PPO       | SAC       |
| -------------------------- | --------- | --------- |
| Continuous Actions         | ✔         | ✔         |
| Easy to Train              | ★★★★★     | ★★★★☆     |
| Hyperparameter Sensitivity | Low       | Medium    |
| Exploration                | Good      | Excellent |
| Sample Efficiency          | Medium    | High      |
| Noisy Environments         | Good      | Excellent |
| Parallel Training          | Excellent | Good      |
| Implementation Complexity  | Low       | Higher    |

### PPO

Strengths:

* Simple implementation.
* Stable optimization.
* Widely used.
* Excellent software support.

Weaknesses:

* Uses data less efficiently than SAC.
* May require more environment interactions.

---

### SAC

Strengths:

* Excellent sample efficiency.
* Strong exploration due to entropy maximization.
* Handles stochastic environments well.

Weaknesses:

* More complex.
* More hyperparameters to tune.
* Slightly harder to debug.

---

# 6.21 What Should You Use for Your MTJ Research?

Based on what you've shared about your project:

* Continuous optimization of device parameters.
* Stochastic LLG simulations with thermal noise.
* Multiple competing objectives (entropy, KL divergence, energy, delay).
* Expensive simulation runs.

I would recommend the following progression:

1. **Start with PPO** to establish a reliable baseline. It is easier to implement, easier to debug, and has excellent support in libraries such as Stable-Baselines3.

2. **Experiment with SAC** once the PPO pipeline is working. SAC's stronger exploration and higher sample efficiency may produce better optimization performance for your stochastic MTJ environment.

3. Consider **TD3** if your action space is continuous and deterministic precision becomes particularly important.

This progression lets you build confidence and produce meaningful comparisons in a research paper.

---

# Summary

Actor-Critic algorithms combine value estimation with direct policy optimization.

The central ideas are:

* The **Actor** learns *what action to take*.
* The **Critic** learns *how good that action was*.
* The **Advantage Function** measures whether an action performed better or worse than expected.
* **GAE** reduces variance and improves stability.
* **PPO** performs small, stable policy updates and is one of the most widely used RL algorithms today.
* **DDPG**, **TD3**, and **SAC** extend Actor-Critic ideas to continuous control.
* For engineering optimization problems such as MTJ parameter tuning, **PPO and SAC** are among the strongest practical choices.

---

# Exercises

1. Explain the roles of the Actor and the Critic in your own words. Why are two networks beneficial?

2. Why is the Advantage Function more informative than using rewards alone?

3. Compare PPO and SAC. In what situations might each algorithm be preferred?

4. Design an Actor-Critic formulation for your MTJ optimization problem:

   * Define the state.
   * Define the Actor's outputs.
   * Define the Critic's objective.
   * Propose a reward function.

5. If each MTJ simulation takes several seconds to run, discuss why sample efficiency becomes important and how that might influence your choice between PPO and SAC.

---
