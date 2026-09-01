# Section 2 — Markov Decision Process (MDP)

## The Mathematical Foundation of Reinforcement Learning

---

# Chapter Overview

In Section 1, we learned that Reinforcement Learning is an agent learning through interaction with an environment.

That explanation is intuitive—but it leaves many questions unanswered.

* What exactly is a **state**?
* What determines the next state?
* How does the environment behave?
* How does the agent decide what action to take?
* What mathematical framework describes the entire RL problem?

The answer is the **Markov Decision Process (MDP)**.

Nearly every modern RL algorithm—Q-Learning, DQN, PPO, SAC, TD3, A2C, and others—is built on the MDP framework.

By the end of this section, you will understand:

* The Markov Property
* States and state transitions
* Actions
* Rewards
* Policies
* Transition probabilities
* Episodes and trajectories
* Returns
* Discount factors
* Bellman intuition (without full derivation)
* How to formulate your **MTJ optimization** as an MDP

---

# 2.1 Why Do We Need Mathematics?

Suppose we tell a robot:

> "Learn to walk."

The robot immediately faces several questions:

* What information should I observe?
* What movements can I perform?
* How do I know whether I improved?
* When should I stop?

We need a formal language to describe this interaction.

The MDP provides that language.

---

# 2.2 What is a Markov Decision Process?

A **Markov Decision Process (MDP)** is a mathematical framework for modeling sequential decision-making under uncertainty.

An MDP consists of five fundamental components:

$$
(S,\;A,\;P,\;R,\;\gamma)
$$

where:

| Symbol     | Meaning                      |
| ---------- | ---------------------------- |
| \(S\)      | Set of all possible states   |
| \(A\)      | Set of all possible actions  |
| \(P\)      | State transition probability |
| \(R\)      | Reward function              |
| \(\gamma\) | Discount factor              |

Everything in reinforcement learning revolves around these five components.

---

# 2.3 The Markov Property

The most important assumption in RL is the **Markov Property**.

It states:

> **The future depends only on the present state—not on the entire past history.**

In other words,

Instead of remembering everything that happened before,

```text
Past → Present → Future
```

the current state contains all the information needed to make an optimal decision.

Mathematically,

$$
P(S_{t+1}\mid S_t,S_{t-1},...,S_0)
=
P(S_{t+1}\mid S_t)
$$

This means:

The probability of the next state depends only on the current state.

---

## Everyday Example: GPS Navigation

Imagine you are driving using GPS.

The navigation system only needs:

* Your current location
* Your destination

It does **not** need to know:

* Which roads you used 10 minutes ago
* Where you bought coffee
* Where you stopped yesterday

Your current position summarizes everything relevant for deciding the next turn.

That is the Markov Property.

---

## Chess Example

Suppose the board currently looks like this:

```text
Current Board
```

To choose the next move, the AI only needs the current board.

It does **not** need to know the exact sequence of moves that produced it.

---

## MTJ Example

Suppose your current device parameters are:

```text
Ms = 1.1 MA/m
Ku = 0.75 MJ/m³
Alpha = 0.02
Diameter = 50 nm
Temperature = 300 K
Pulse Width = 2 ns
```

To decide the next adjustment, the RL agent only needs these current values (and any other state variables you choose to include). It does not need the entire history of previous parameter changes.

---

# 2.4 States

A **state** is a complete description of the environment at a particular time.

Think of a state as a snapshot.

Examples:

### Chess

State = Current board configuration

### Robot

State =

* Position
* Velocity
* Joint angles

### Self-driving Car

State =

* Camera image
* Speed
* Steering angle
* GPS position

### MTJ Optimization

A possible state could be:

```text
State

Ms
Ku
Alpha
Temperature
Diameter
Pulse Width
Current Density
```

Or it could be even richer:

```text
Ms
Ku
Alpha
Resistance
Switching Probability
Energy
Delay
Entropy
KL Divergence
```

The choice of state representation is a crucial design decision because it determines what information the agent can use.

---

# 2.5 Actions

An **action** is any decision the agent can make.

Examples:

### Chess

Actions:

* Move Pawn
* Move Queen
* Castle

### Robot

Actions:

* Rotate Joint 1
* Rotate Joint 2
* Open Gripper

### MTJ Optimization

Actions might include:

```text
Increase Ms

Decrease Ms

Increase Ku

Decrease Ku

Increase Pulse Width

Decrease Pulse Width

Increase Current Density

Decrease Current Density
```

Another option is to allow continuous actions, where the agent directly outputs new parameter values.

---

# 2.6 State Transitions

After the agent takes an action, the environment changes.

This change is called a **state transition**.

```text
Current State

↓

Action

↓

Next State
```

Example:

```text
Temperature = 300 K

↓

Increase Temperature

↓

Temperature = 310 K
```

In your MTJ simulator, a state transition occurs when new device parameters are applied and the stochastic LLG simulation produces updated device behavior.

---

# 2.7 Transition Probability

In many environments, the same action does not always produce the same outcome.

For example, in your MTJ simulator, thermal noise introduces randomness.

Instead of a deterministic transition:

```text
State A

↓

Action

↓

Always State B
```

you may have:

```text
State A

↓

Action

↓

State B (70%)

↓

State C (20%)

↓

State D (10%)
```

This uncertainty is described by the transition probability:

$$
P(s' \mid s, a)
$$

which means:

> The probability of reaching next state \(s'\) after taking action \(a\) in state \(s\).

For stochastic MTJ simulations, this probabilistic view is very natural.

---

# 2.8 Rewards

After each action, the environment provides feedback.

This feedback is the **reward**.

Examples:

### Chess

Win = +1

Lose = -1

### Robot

Fall = -100

Walk forward = +1

### MTJ

A reward might combine several objectives:

* Lower KL divergence
* Higher entropy
* Lower energy
* Shorter delay

For example:

$$
R = 5(\text{Entropy})
-2(\text{Energy})
-3(\text{KL})
$$

This is only an illustrative reward function. In practice, designing a good reward function is one of the most important parts of an RL project.

---

# 2.9 Policies

A **policy** tells the agent what action to take in each state.

You can think of it as the agent's strategy.

Notation:

$$
\pi(a\mid s)
$$

This is read as:

> The probability of choosing action \(a\) when the current state is \(s\).

A policy can be:

### Deterministic

Always choose the same action for a given state.

Example:

```text
State A

↓

Always choose Action 3
```

### Stochastic

Choose actions according to probabilities.

Example:

```text
State A

↓

Action 1 (60%)

Action 2 (30%)

Action 3 (10%)
```

Modern algorithms such as PPO and SAC often learn stochastic policies during training.

---

# 2.10 Episodes

An **episode** is one complete interaction between the agent and the environment.

For example:

```text
Reset Environment

↓

State

↓

Action

↓

Reward

↓

State

↓

Action

↓

Reward

↓

...

↓

Terminal State

↓

Episode Ends
```

Examples:

### Chess

One full game.

### Robot

Walk until falling.

### MTJ Optimization

One optimization run, consisting of a sequence of parameter adjustments and evaluations.

---

# 2.11 Trajectories

A **trajectory** records everything that happened during an episode.

A trajectory looks like:

```text
State₀

↓

Action₀

↓

Reward₁

↓

State₁

↓

Action₁

↓

Reward₂

↓

State₂

↓

...
```

During training, the RL algorithm collects many trajectories and uses them to improve its policy.

---

# 2.12 Return

Receiving a reward immediately is good, but RL cares about the **total future reward**, called the **return**.

If the rewards received are:

```text
1

2

3

4
```

the simplest return is:

$$
G = 1 + 2 + 3 + 4 = 10
$$

However, RL usually values immediate rewards more than distant rewards.

This leads to the concept of discounting.

---

# 2.13 Discount Factor

The **discount factor**, denoted by \(\gamma\), determines how much future rewards matter.

The discounted return is:

$$
G_t
=
R_{t+1}
+
\gamma R_{t+2}
+
\gamma^2 R_{t+3}
+\cdots
$$

Interpretation:

* \(\gamma = 0\): only immediate rewards matter.
* \(\gamma \approx 1\): long-term rewards are almost as important as immediate ones.

For many engineering problems, \(\gamma\) is chosen between **0.95** and **0.99**, though the best value depends on the task.

---

# 2.14 Putting Everything Together

The RL interaction cycle can now be described using MDP terminology:

```text
Current State (s)

↓

Agent selects Action (a)

↓

Environment transitions to Next State (s')

↓

Environment returns Reward (r)

↓

Repeat
```

This cycle is the basis of all reinforcement learning algorithms.

---

# 2.15 MDP Formulation for Your MTJ Optimization Project

Now let's formulate your research problem as an MDP.

## State (\(S\))

The current configuration and measured behavior of the MTJ device.

Example:

```text
Ms
Ku
Alpha
Diameter
Temperature
Current Density
Pulse Width
Switching Probability
Energy
Entropy
KL Divergence
```

---

## Action (\(A\))

The agent changes one or more device parameters.

Examples:

```text
Increase Ku

Decrease Alpha

Increase Pulse Width

Reduce Current Density

Increase Diameter
```

If using a continuous-action algorithm (e.g., PPO or SAC), the agent could directly output numerical adjustments.

---

## Environment (\(P\))

Your stochastic MTJ simulator.

It receives the chosen parameters, runs the LLG simulation, includes thermal fluctuations, and computes the resulting device behavior.

---

## Reward (\(R\))

A scalar score that reflects how good the resulting design is.

For example, the reward might increase when:

* Entropy improves
* Randomness improves
* Energy decreases
* Delay decreases

and decrease when:

* KL divergence increases
* Switching failures occur

---

## Episode

An episode could consist of a fixed number of optimization steps (for example, 20 or 50 parameter updates), or it could terminate when a satisfactory design is reached.

---

# Summary

The Markov Decision Process is the mathematical language of reinforcement learning.

An MDP is defined by five components:

* **States (\(S\))**: what the agent observes.
* **Actions (\(A\))**: what the agent can do.
* **Transition probabilities (\(P\))**: how the environment changes after actions.
* **Rewards (\(R\))**: feedback indicating the quality of actions.
* **Discount factor (\(\gamma\))**: how much future rewards matter.

By expressing your MTJ optimization problem in terms of these components, you transform it into a standard RL problem that can be tackled with algorithms such as Q-learning, DQN, PPO, or SAC.

---

## Exercises

1. Define a complete MDP for your MTJ optimization problem by specifying:

   * The state variables.
   * The available actions.
   * A reward function.
   * A suitable episode termination condition.

2. Explain why thermal noise makes the MTJ environment **stochastic** rather than deterministic.

3. Suppose your reward is:

   $$
   R = 2(\text{Entropy}) - 0.5(\text{Energy}) - 3(\text{KL Divergence})
   $$

   Discuss how changing the coefficients would alter the agent's behavior.

4. Consider two discount factors:

   * \(\gamma = 0.1\)
   * \(\gamma = 0.99\)

   Explain how each would influence the optimization strategy for a sequential MTJ parameter search.

In **Section 3**, we will begin implementing reinforcement learning itself, starting with **Tabular Reinforcement Learning**, where the agent learns action values using methods such as Monte Carlo, SARSA, and Q-learning before moving to deep neural network–based approaches.
