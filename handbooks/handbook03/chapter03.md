# Section 3 — Tabular Reinforcement Learning

# Learning by Experience: The Birth of Reinforcement Learning Algorithms

---

# Chapter Overview

In **Section 1**, we learned *what Reinforcement Learning is*.

In **Section 2**, we learned *how an RL problem is mathematically modeled as a Markov Decision Process (MDP)*.

Now we finally answer the central question:

> **How does an RL agent actually learn?**

This section introduces the first family of RL algorithms:

> **Tabular Reinforcement Learning**

Although these methods are too limited for large-scale problems like your MTJ optimization, they are the foundation of every modern RL algorithm. Understanding them is essential before moving on to Deep Q-Networks (DQN), PPO, or SAC.

By the end of this section, you will understand:

* What Value Functions are
* State Values vs Action Values
* The Bellman Equation
* Dynamic Programming intuition
* Monte Carlo Learning
* Temporal Difference (TD) Learning
* SARSA
* Q-Learning
* Exploration vs Exploitation
* ε-Greedy Policy
* Why tabular methods fail for large problems
* Why Deep RL became necessary

We will implement the algorithms **from scratch using only Python and NumPy**.

---

# 3.1 How Does an RL Agent Decide What to Do?

Suppose you have a simple maze.

```text
#############

S . . . . G

#############
```

* **S** = Start
* **G** = Goal

Possible actions:

* Left
* Right

Initially, the agent knows nothing.

If you ask,

> "Should I go left or right?"

the agent has no answer.

It must learn from experience.

---

# 3.2 Learning From Rewards

Imagine the following experience.

### Episode 1

```text
Start

↓

Right

↓

Reward = 0

↓

Right

↓

Reward = 0

↓

Goal

↓

Reward = +100
```

The agent remembers:

> Going right eventually leads to a large reward.

Now imagine another path.

```text
Start

↓

Left

↓

Trap

↓

Reward = -100
```

The agent learns:

> Going left is bad.

Eventually,

the agent develops a preference for actions that produce higher long-term rewards.

But how can we quantify "goodness"?

---

# 3.3 Value Functions

The fundamental idea of RL is surprisingly simple:

> Assign a numerical value to each situation.

Higher value

↓

Better future.

Lower value

↓

Worse future.

This numerical estimate is called a **Value Function**.

---

# 3.4 State Value Function

The **State Value Function** answers:

> **"How good is it to be in this state?"**

Notation:

$$
V(s)
$$

Example:

```text
Goal State

V = 100

-----------------

Near Goal

V = 80

-----------------

Middle

V = 40

-----------------

Trap

V = -100
```

The higher the value,

the more desirable the state.

Notice:

The value is **not** the immediate reward.

It is the expected future reward from that state.

---

## Example

Imagine a board game.

```text
S1

↓

S2

↓

S3

↓

Goal
```

Suppose:

Goal reward = +100.

Then,

```text
Goal

V =100

S3

V =90

S2

V =70

S1

V =50
```

Even though S1 gives no immediate reward,

it is valuable because it leads toward the goal.

---

# 3.5 Action Value Function (Q Function)

Often,

knowing the value of a state is not enough.

We want to know:

> **"How good is taking a particular action in this state?"**

This is the **Action Value Function**, also called the **Q-function**.

Notation:

$$
Q(s,a)
$$

Meaning:

Expected future reward if:

* we are in state \(s\),
* take action \(a\),
* then continue following our policy.

---

## Example

Suppose:

State = Intersection.

Actions:

```text
Left

Right

Straight
```

Estimated Q-values:

| Action   | Q-value |
| -------- | ------- |
| Left     | 15      |
| Right    | 60      |
| Straight | 35      |

The agent chooses

```text
Right
```

because it has the highest estimated long-term value.

---

# 3.6 State Value vs Action Value

These two concepts are often confused.

| State Value             | Action Value                           |
| ----------------------- | -------------------------------------- |
| How good is this state? | How good is this action in this state? |
| Notation: \(V(s)\)      | Notation: \(Q(s,a)\)                   |
| One value per state     | One value per state-action pair        |

Example:

Suppose a state has three actions.

```text
State A

↓

Left

↓

Q=30

----------------

Right

↓

Q=80

----------------

Forward

↓

Q=40
```

Then

```text
V(State A)=80
```

because the best action has value 80.

---

# 3.7 Bellman Intuition

The Bellman Equation is one of the most important ideas in RL.

It expresses a profound insight:

> **The value of a state equals the immediate reward plus the value of future states.**

In words:

```text
Value

=

Immediate Reward

+

Future Value
```

Instead of evaluating an entire future at once,

the Bellman idea breaks it into one step at a time.

This recursive viewpoint makes reinforcement learning computationally feasible.

We will derive the Bellman equations more formally in later sections when discussing dynamic programming and deep RL.

---

# 3.8 The Q-Table

For small problems,

we can store every Q-value in a table.

Suppose we have four states.

Actions:

```text
Left

Right
```

The Q-table becomes:

| State | Left | Right |
| ----- | ---- | ----- |
| S0    | 10   | 25    |
| S1    | 15   | 42    |
| S2    | 55   | 80    |
| Goal  | 0    | 0     |

This table is the agent's memory.

Learning means updating these numbers based on experience.

---

# 3.9 Exploration vs Exploitation

This is one of the central problems in RL.

Imagine you discover a restaurant serving excellent food.

Should you:

**Exploit**

Keep eating there forever?

or

**Explore**

Try new restaurants that might be even better?

RL faces exactly the same dilemma.

---

## Exploitation

Always choose the best-known action.

Advantage:

* High reward.

Disadvantage:

* Might miss even better actions.

---

## Exploration

Sometimes intentionally try unknown actions.

Advantage:

* Discover new possibilities.

Disadvantage:

* Temporary decrease in reward.

Good RL algorithms balance both.

---

# 3.10 ε-Greedy Policy

The simplest exploration strategy is the **ε-Greedy Policy**.

The rule is:

With probability

$$
\varepsilon
$$

choose a random action.

Otherwise,

choose the best action.

Example:

```text
ε = 0.1
```

Means:

90%

↓

Best action.

10%

↓

Random action.

---

### Why Use It?

Suppose your Q-table says:

| Action | Q  |
| ------ | -- |
| Left   | 80 |
| Right  | 70 |

Without exploration,

the agent would **never** try Right again.

But perhaps Right later leads to a better path that has not yet been discovered.

Exploration prevents premature convergence.

---

# 3.11 Monte Carlo Learning

The first true learning algorithm we study is **Monte Carlo (MC) Learning**.

The key idea is simple:

> Learn only after the episode has finished.

Suppose the agent plays an entire episode.

```text
Start

↓

State 1

↓

State 2

↓

Goal
```

Only after reaching the goal does it compute the return and update the values of all visited states.

Advantages:

* Simple.
* Unbiased estimates.

Disadvantages:

* Must wait until the episode ends.
* Slow for long episodes.

---

# 3.12 Temporal Difference (TD) Learning

Monte Carlo waits until the end.

Temporal Difference (TD) Learning updates immediately.

Instead of waiting,

the agent updates after every step.

```text
State

↓

Action

↓

Reward

↓

Update Immediately
```

Advantages:

* Faster learning.
* Works in continuing tasks.
* Basis of many modern algorithms.

---

## TD Error

The difference between:

* Expected reward.
* Observed reward.

is called the **Temporal Difference Error**.

The TD error tells the agent whether reality was better or worse than expected.

---

# 3.13 SARSA

SARSA stands for:

```text
State

Action

Reward

State

Action
```

It updates values using the action the agent actually takes.

The update sequence is:

```text
S

↓

A

↓

R

↓

S'

↓

A'
```

SARSA is called an **on-policy** algorithm because it learns from the same policy it follows.

Characteristics:

* More conservative.
* Considers exploration during learning.
* Often safer in stochastic environments.

---

# 3.14 Q-Learning

Q-Learning is one of the most influential RL algorithms ever developed.

Unlike SARSA,

it assumes that the agent will always choose the best possible future action.

Update sequence:

```text
S

↓

A

↓

R

↓

S'

↓

Best Future Action
```

Q-Learning is an **off-policy** algorithm because it learns about the optimal policy regardless of the actions actually taken during exploration.

Advantages:

* Simple.
* Fast.
* Proven convergence under suitable conditions.
* Foundation of Deep Q Networks (DQN).

---

# 3.15 SARSA vs Q-Learning

| Feature               | SARSA              | Q-Learning                |
| --------------------- | ------------------ | ------------------------- |
| Type                  | On-policy          | Off-policy                |
| Learns from           | Actual next action | Best possible next action |
| Behavior              | More conservative  | More aggressive           |
| Exploration awareness | Yes                | No (during update)        |

Both algorithms are fundamental and often produce similar results on small problems.

---

# 3.16 Python Example: A Tiny Q-Table

Let's build the simplest possible Q-table.

```python
import numpy as np

# Four states
n_states = 4

# Two actions: Left (0), Right (1)
n_actions = 2

# Initialize all Q-values to zero
Q = np.zeros((n_states, n_actions))

print(Q)
```

Output:

```text
[[0. 0.]
 [0. 0.]
 [0. 0.]
 [0. 0.]]
```

Initially, the agent has no knowledge.

---

Suppose after interacting with the environment, we learn that in **state 0**, moving **Right** is beneficial.

```python
Q[0, 1] = 10

print(Q)
```

Output:

```text
[[ 0. 10.]
 [ 0.  0.]
 [ 0.  0.]
 [ 0.  0.]]
```

Now the agent prefers:

```python
best_action = np.argmax(Q[0])

print(best_action)
```

Output:

```text
1
```

which corresponds to the **Right** action.

Although this example is trivial, it illustrates the essence of tabular RL: learning consists of updating a table of action values.

---

# 3.17 Why Tabular RL Fails for Large Problems

Imagine your MTJ optimization problem.

Suppose you have:

* 8 adjustable parameters.
* Each parameter can take 100 possible values.

The number of possible states is approximately:

$$
100^8 = 10^{16}
$$

Even if each state has only 10 actions, the Q-table would need about:

$$
10^{17}
$$

entries.

This is impossible to store or learn.

This problem is known as the **curse of dimensionality**.

For complex problems:

* robotics,
* autonomous driving,
* molecular design,
* MTJ optimization,

tabular methods are no longer practical.

---

# 3.18 Why Deep Learning Solves This Problem

Instead of storing every value in a gigantic table,

modern RL uses a neural network to approximate the Q-function.

Instead of:

```text
Huge Table

↓

Lookup
```

we have:

```text
State

↓

Neural Network

↓

Predicted Q-values
```

The network learns patterns and can generalize to states it has never seen before.

This idea leads directly to **Deep Reinforcement Learning**, which we will study in the next section.

---

# Summary

In this section, you learned how an RL agent begins to learn from experience.

The key concepts are:

* **Value Function (\(V\))**: estimates how good a state is.
* **Action Value Function (\(Q\))**: estimates how good taking a particular action in a state is.
* **Q-table**: stores action values for small problems.
* **Exploration vs Exploitation**: balancing trying new actions and using known good ones.
* **ε-Greedy Policy**: a simple exploration strategy.
* **Monte Carlo Learning**: updates after complete episodes.
* **Temporal Difference Learning**: updates after every step.
* **SARSA**: an on-policy TD method.
* **Q-Learning**: an off-policy TD method and the foundation of many modern algorithms.

The greatest limitation of tabular methods is that they cannot scale to the enormous state spaces found in real scientific optimization problems such as MTJ parameter tuning.

---

# Exercises

1. Explain, in your own words, the difference between \(V(s)\) and \(Q(s,a)\).

2. Why is exploration necessary, even when the agent already knows a good action?

3. Compare Monte Carlo Learning and Temporal Difference Learning. What are the main advantages and disadvantages of each?

4. Describe the difference between SARSA and Q-Learning. In what kinds of environments might SARSA's more conservative behavior be beneficial?

5. Estimate the size of a Q-table if an environment has:

   * 500 states and 6 actions.
   * 10,000 states and 12 actions.
   * \(10^{12}\) states and 20 actions.

   Discuss why the final case motivates the use of function approximation.

In **Section 4**, we will replace the Q-table with a neural network and study **Deep Reinforcement Learning**, beginning with the motivation for function approximation and then developing the **Deep Q-Network (DQN)** algorithm from first principles.
