# Section 5 — Policy Gradient Methods

# Learning the Policy Directly Instead of Learning Q-values

---

# Chapter Overview

So far, every reinforcement learning algorithm we have studied has followed the same basic philosophy:

> **Estimate the value of actions, then choose the best one.**

This is called **Value-Based Reinforcement Learning**.

Examples:

* Q-Learning
* Deep Q-Network (DQN)
* Double DQN
* Dueling DQN

These algorithms learn

$$
Q(s,a)
$$

and then select

$$
a=\arg\max_a Q(s,a)
$$

This works well for **discrete action spaces**.

However, many scientific optimization problems—including your MTJ optimization—require **continuous actions**.

For example:

Instead of choosing

```text
Action 1

Action 2

Action 3
```

the agent should output

```text
Current Density = 2.437×10¹¹ A/m²

Pulse Width = 1.84 ns

Ku = 0.71 MJ/m³

Alpha = 0.0187
```

There are infinitely many possible actions.

Searching all of them with a Q-function becomes impractical.

This leads to a different philosophy:

> **Instead of learning the value of actions, learn the policy itself.**

This is the foundation of **Policy Gradient Methods**.

These methods later evolve into:

* PPO
* TRPO
* DDPG
* TD3
* SAC

which are among the most widely used algorithms in modern engineering optimization.

---

# 5.1 Value-Based RL vs Policy-Based RL

Let's compare the two philosophies.

## Value-Based RL

```text
State

↓

Estimate Q-values

↓

Choose Best Action
```

The policy is **implicit**.

The algorithm never learns the policy directly.

Instead,

it derives the policy from the Q-values.

---

## Policy-Based RL

```text
State

↓

Policy Network

↓

Action
```

The neural network directly outputs the action.

There is no Q-table.

There is no argmax search.

The policy itself becomes the model.

---

# 5.2 What is a Policy?

Recall from Section 2,

a policy is the agent's strategy.

Notation:

$$
\pi(a|s)
$$

Meaning

> Probability of choosing action \(a\) in state \(s\).

In policy gradient methods,

the policy is represented by a neural network.

Instead of

```text
Q-table
```

we now have

```text
State

↓

Neural Network

↓

Action Probability
```

or

```text
State

↓

Neural Network

↓

Continuous Action
```

---

# 5.3 Why Learn the Policy Directly?

Suppose your MTJ agent needs to optimize

```text
Current Density

Pulse Width

Diameter

Temperature
```

Each variable is continuous.

There are infinitely many combinations.

Computing

$$
Q(s,a)
$$

for every possible action becomes impossible.

Instead,

the policy network directly predicts

```text
Current Density = 2.47×10¹¹

Pulse Width = 1.82 ns

Diameter = 47 nm
```

This is much more natural.

---

# 5.4 Deterministic vs Stochastic Policies

Policies come in two forms.

---

## Deterministic Policy

Always produces exactly one action.

Mathematically,

$$
a=\pi(s)
$$

Example

State

↓

Always output

```text
Increase Ku
```

The same state always produces the same action.

---

## Stochastic Policy

Outputs a probability distribution.

Example

State

↓

Output

| Action         | Probability |
| -------------- | ----------- |
| Increase Ku    | 60%         |
| Decrease Ku    | 25%         |
| Increase Alpha | 15%         |

Each episode,

the action is sampled.

Modern policy-gradient methods often use stochastic policies during training because they naturally encourage exploration.

---

# 5.5 Neural Network Policy

Suppose

State

```text
Ms

Ku

Alpha

Temperature
```

Input to network

↓

Hidden layers

↓

Output

```text
Probability(Action1)

Probability(Action2)

Probability(Action3)
```

Example

```text
Action1 : 0.15

Action2 : 0.70

Action3 : 0.15
```

The agent samples one action from this distribution.

---

# 5.6 The Goal of Policy Learning

The objective is straightforward:

> Adjust the neural network parameters so that good actions become more likely and bad actions become less likely.

Suppose

Current probabilities

```text
Left : 0.40

Right : 0.60
```

The agent chooses Right.

Eventually,

it receives

Reward = +100.

Next time,

the network becomes

```text
Left : 0.10

Right : 0.90
```

Good actions gradually become more probable.

---

# 5.7 Policy Gradient Intuition

This is where the name comes from.

A neural network contains millions of parameters.

Suppose

```text
θ₁

θ₂

θ₃

...

θₙ
```

Instead of updating Q-values,

we update

the neural network parameters directly.

The direction of the update is called the

**Policy Gradient**.

It tells us

> "How should the policy change to increase future rewards?"

---

# 5.8 Mountain Climbing Analogy

Imagine standing on a mountain covered in fog.

You cannot see the summit.

You can only observe the slope beneath your feet.

If the ground slopes upward,

walk uphill.

Eventually,

you reach the peak.

Policy Gradient methods do exactly this.

The "mountain" is

Expected Reward.

The slope is

Policy Gradient.

The summit is

Optimal Policy.

---

# 5.9 REINFORCE Algorithm

The first practical Policy Gradient algorithm is called

**REINFORCE**

It is surprisingly simple.

Training cycle

```text
Observe State

↓

Choose Action

↓

Run Episode

↓

Calculate Total Reward

↓

Increase Probability
of Good Actions

↓

Decrease Probability
of Bad Actions
```

Unlike TD methods,

REINFORCE updates only after the episode ends.

---

# 5.10 The Credit Assignment Problem

Suppose

Robot

takes

50 actions

and finally reaches the goal.

Question

Which action deserves the credit?

Action 1?

Action 18?

Action 49?

Policy Gradient algorithms solve this by weighting actions according to the total return achieved after taking them.

Actions leading to higher returns receive stronger positive updates.

---

# 5.11 Log Probability Trick

Policy Gradient optimization involves probabilities.

Differentiating probabilities directly is inconvenient.

A mathematical identity simplifies the derivation:

$$
\nabla_\theta P(x)
=
P(x)\,\nabla_\theta \log P(x)
$$

Using logarithms transforms products into sums and makes optimization much easier.

This identity is known as the **Log Probability Trick** or **Likelihood Ratio Trick**.

It is one of the central ideas behind policy-gradient methods.

---

# 5.12 Policy Gradient Objective

The objective is to maximize the expected return:

$$
J(\theta)
=
\mathbb{E}[G]
$$

where:

* \(J(\theta)\): performance of the policy.
* \(\theta\): neural network parameters.
* \(G\): total discounted return.

Instead of maximizing Q-values,

we directly maximize expected reward.

---

# 5.13 Variance Problem

Policy Gradient methods have a weakness.

Suppose

Episode 1

Reward

```text
105
```

Episode 2

Reward

```text
-30
```

Episode 3

Reward

```text
220
```

Updates become extremely noisy.

Training is unstable.

This problem is called

High Variance.

---

# 5.14 Baseline

A simple solution is to subtract a **baseline**.

Instead of using

```text
Reward
```

we use

```text
Reward

-

Baseline
```

The baseline does **not** change the expected gradient, but it significantly reduces variance.

A common choice is the average return over recent episodes.

---

# 5.15 Advantage Function

An even better idea is the **Advantage Function**.

Instead of asking

> "Was this reward large?"

we ask

> "Was this reward better than expected?"

Definition:

$$
A(s,a)
=
Q(s,a)-V(s)
$$

Interpretation:

| Advantage | Meaning                               |
| --------- | ------------------------------------- |
| Positive  | Action performed better than expected |
| Zero      | Action was as expected                |
| Negative  | Action was worse than expected        |

The advantage function later becomes a key component of Actor-Critic methods.

---

# 5.16 Entropy Regularization

Suppose the network quickly learns

```text
Action 1

Probability = 100%
```

The agent stops exploring.

Learning stagnates.

To encourage exploration,

we add an entropy bonus.

High entropy means

```text
Action1 35%

Action2 33%

Action3 32%
```

Low entropy means

```text
Action1 99%

Action2 1%

Action3 0%
```

Early in training,

high entropy is beneficial because it encourages exploration.

Later,

entropy naturally decreases as the policy becomes more confident.

---

# 5.17 Continuous Actions

This is where Policy Gradient methods become especially valuable.

Instead of choosing among discrete actions,

the policy outputs continuous values.

Example

Input

```text
Current MTJ State
```

Output

```text
Current Density = 2.46×10¹¹

Pulse Width = 1.74 ns

Ku = 0.73 MJ/m³
```

No discretization is required.

This is one of the main reasons policy-gradient methods are attractive for scientific optimization.

---

# 5.18 PyTorch Example: Simple Policy Network

Let's create a small policy network.

```python
import torch
import torch.nn as nn

class PolicyNetwork(nn.Module):

    def __init__(self, state_dim, action_dim):
        super().__init__()

        self.network = nn.Sequential(
            nn.Linear(state_dim, 128),
            nn.ReLU(),

            nn.Linear(128, 128),
            nn.ReLU(),

            nn.Linear(128, action_dim),
            nn.Softmax(dim=-1)
        )

    def forward(self, x):
        return self.network(x)
```

Create the model.

```python
policy = PolicyNetwork(
    state_dim=6,
    action_dim=4
)
```

Sample state.

```python
state = torch.randn(1,6)
```

Predict action probabilities.

```python
probs = policy(state)

print(probs)
```

Example output

```text
tensor([[0.08,
         0.54,
         0.31,
         0.07]])
```

Instead of outputting Q-values,

the network outputs a probability distribution over actions.

---

# 5.19 Why REINFORCE Is Not Enough

Although REINFORCE is historically important,

it has several drawbacks:

* High variance.
* Slow convergence.
* Inefficient use of collected data.
* Updates only after complete episodes.

Researchers developed improved methods.

These include:

* Actor-Critic
* A2C
* A3C
* PPO
* TRPO
* DDPG
* TD3
* SAC

These algorithms retain the idea of learning a policy directly while greatly improving stability and sample efficiency.

---

# 5.20 Policy Gradients and Your MTJ Project

Your optimization problem has several characteristics:

* Continuous parameters.
* Expensive simulations.
* Multiple competing objectives.
* Stochastic dynamics.
* High-dimensional state space.

This makes Policy Gradient methods much more suitable than DQN.

Instead of selecting from a small list of actions,

your policy network could directly output:

```text
Ms

Ku

Alpha

Current Density

Pulse Width
```

or small continuous adjustments to these parameters.

The simulator evaluates the design,

returns a reward,

and the policy is updated to increase the probability of generating better parameter combinations in future iterations.

---

# Summary

Policy Gradient methods represent a fundamental shift in reinforcement learning.

Instead of learning action values and deriving a policy indirectly, they learn the policy itself.

The key ideas are:

* A **policy** maps states directly to actions or action probabilities.
* **Policy Gradient** methods optimize the parameters of the policy network to maximize expected return.
* **REINFORCE** is the simplest policy-gradient algorithm and updates the policy after complete episodes.
* The **Log Probability Trick** enables efficient gradient computation.
* **Baselines** and the **Advantage Function** reduce variance and improve learning.
* **Entropy Regularization** encourages exploration during training.
* Policy-gradient methods naturally support **continuous action spaces**, making them well suited for engineering optimization tasks such as MTJ parameter tuning.

However, pure policy-gradient methods still suffer from high variance and slow learning.

The next major development is to combine the strengths of value-based and policy-based approaches.

---

# Exercises

1. Explain the philosophical difference between value-based methods (e.g., DQN) and policy-based methods.

2. Why are policy-gradient methods generally preferred for continuous action spaces?

3. Describe the difference between deterministic and stochastic policies. Give an engineering example where each might be appropriate.

4. Why does REINFORCE have high variance? How do baselines help reduce this problem?

5. For your MTJ optimization project, design:

   * A possible state vector.
   * A continuous action vector.
   * A reward function suitable for policy-gradient learning.

In **Section 6**, we will study **Actor-Critic Algorithms**, which combine value estimation with direct policy optimization. This family includes **A2C, A3C, PPO, DDPG, TD3, and SAC**—the algorithms most commonly used today for robotics, control systems, and scientific optimization. For your MTJ project, **PPO and SAC** are likely to be the strongest candidates, and we will examine them in depth.
