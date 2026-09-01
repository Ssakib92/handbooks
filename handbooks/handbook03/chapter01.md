# Section 1 — Reinforcement Learning Fundamentals

## From Zero to Understanding RL Intuitively

---

# Chapter Overview

This chapter assumes **no prior knowledge of Reinforcement Learning (RL)**.

By the end of this section, you will understand:

* What Reinforcement Learning is
* Why Reinforcement Learning was invented
* How it differs from other Machine Learning methods
* The terminology used in every RL paper
* How an RL agent learns
* Why RL is particularly useful for engineering optimization
* How RL relates to your **MTJ optimization project**

**Important:** We intentionally avoid heavy mathematics in this section. The goal is to build intuition first. Formal equations will come in **Section 2 (Markov Decision Process)**.

---

# 1.1 What is Machine Learning?

Machine Learning (ML) is a branch of Artificial Intelligence that enables computers to improve their performance by learning from experience rather than being explicitly programmed with fixed rules.

Instead of writing:

```python
if temperature > 100:
    increase_fan_speed()
```

we allow the computer to discover good decision rules automatically.

A machine learning algorithm improves itself by observing data or interacting with an environment.

---

## Three Main Types of Machine Learning

Machine learning is generally divided into three categories.

| Type                   | Learns From                  | Goal                 |
| ---------------------- | ---------------------------- | -------------------- |
| Supervised Learning    | Labeled data                 | Predict outputs      |
| Unsupervised Learning  | Unlabeled data               | Discover patterns    |
| Reinforcement Learning | Interaction with environment | Learn good decisions |

Let's understand each one.

---

# 1.2 Supervised Learning

Suppose we want to predict house prices.

We have historical data.

| Size | Bedrooms | Price    |
| ---- | -------- | -------- |
| 1000 | 2        | $120,000 |
| 1500 | 3        | $180,000 |
| 2000 | 4        | $250,000 |

The computer already knows the correct answers.

Input

```
House Features
```

↓

Output

```
House Price
```

The objective is

> Learn a function

```
Input → Output
```

Once trained, we give a new house

```
1800 sq ft
3 bedrooms
```

The model predicts

```
$215,000
```

This is supervised learning.

---

## Engineering Examples

* Fault detection
* Image classification
* Speech recognition
* Solar irradiance prediction (your previous work)
* Disease diagnosis

Notice something:

The computer **never interacts** with the world.

It only learns from existing examples.

---

# 1.3 Unsupervised Learning

Now suppose we remove the labels.

Instead of

```
Customer → Good/Bad
```

we only have

```
Customer data
```

The computer tries to find hidden structures.

Example

Customers naturally separate into groups.

```
Students

Businessmen

Families

Retired
```

Nobody tells the algorithm these groups exist.

It discovers them automatically.

Typical tasks

* Clustering
* Dimensionality reduction
* Feature extraction
* Anomaly detection

Again,

The computer never interacts with the environment.

---

# 1.4 Why Reinforcement Learning?

Now imagine a completely different problem.

Suppose you have a robot.

You cannot give it a dataset of every possible movement.

Instead,

the robot must learn by trying.

It falls.

Gets back up.

Falls again.

Eventually,

it learns to walk.

This is Reinforcement Learning.

---

Imagine teaching a child to ride a bicycle.

You do not provide millions of labeled examples.

Instead,

the child repeatedly

Try

↓

Fall

↓

Adjust

↓

Try again

↓

Improve

This is exactly Reinforcement Learning.

---

# Definition

Reinforcement Learning is a machine learning paradigm in which an **agent learns by interacting with an environment and receiving rewards or penalties**.

There is no teacher giving the correct answer.

Instead,

the agent discovers good behavior through trial and error.

---

# 1.5 The Reinforcement Learning Loop

Every RL algorithm follows the same basic cycle.

```
Agent

↓

Take Action

↓

Environment Changes

↓

Environment Gives Reward

↓

Agent Learns

↓

Repeat
```

This simple loop is the foundation of all modern RL algorithms, from Q-learning to PPO.

---

# Example: Dog Training

Suppose we train a dog.

Dog sits.

↓

Owner gives treat.

↓

Dog becomes more likely to sit again.

If the dog jumps,

↓

No treat.

↓

Behavior decreases.

The dog is learning from rewards.

This is RL.

---

# Example: Video Game

Suppose an AI plays Mario.

Current screen

↓

Move right

↓

Collect coin

↓

Reward +1

↓

Continue

If Mario dies

↓

Reward -100

↓

Learn not to repeat that action.

---

# Example: Chess

The AI

chooses a move

↓

Game continues

↓

Eventually wins

↓

Positive reward

Over millions of games,

the AI becomes stronger.

---

# Example: Self-driving Car

Observe surroundings

↓

Accelerate

↓

Turn left

↓

Brake

↓

Receive reward

```
Safe driving → positive

Collision → negative

Fuel efficiency → positive
```

---

# 1.6 Why Not Use Supervised Learning?

Suppose we want an AI to play chess.

Could we use supervised learning?

Maybe.

But we'd need

```
Every possible board

Correct move
```

There are

```
10^120
```

possible chess games.

Impossible.

Instead,

RL explores by itself.

---

Now think about your MTJ project.

Could we create a dataset containing

```
Every

Ms

Ku

Alpha

Thickness

Diameter

Temperature

Pulse Width

Current Density

...
```

with the optimal parameter combination?

Impossible.

The search space is enormous.

Instead,

RL searches automatically.

---

# 1.7 Characteristics of Reinforcement Learning

Unlike supervised learning,

RL has several unique properties.

### 1. Trial-and-error learning

The agent must experiment.

Sometimes it makes bad decisions.

This is expected.

---

### 2. Delayed reward

Good decisions may not immediately produce rewards.

Example

Chess

Move 5

↓

Move 20

↓

Move 50

↓

Win

Which move caused the win?

RL learns this relationship.

---

### 3. Sequential decisions

Each action changes future possibilities.

Example

```
Move Left

↓

Different future

Move Right

↓

Different future
```

Every action influences future rewards.

---

### 4. Exploration

Sometimes the agent intentionally tries unknown actions.

Otherwise,

it may never discover something better.

---

### 5. Exploitation

Sometimes the agent simply repeats what it already knows works.

Balancing exploration and exploitation is one of the central challenges in RL.

---

# 1.8 Real-World Applications of RL

RL is used in many domains where decisions must be made sequentially and the outcome depends on previous actions.

Some notable examples include:

| Domain               | Application                       |
| -------------------- | --------------------------------- |
| Robotics             | Walking, grasping, manipulation   |
| Games                | Chess, Go, StarCraft, Dota        |
| Finance              | Portfolio optimization            |
| Medicine             | Personalized treatment strategies |
| Autonomous Vehicles  | Navigation and control            |
| Power Systems        | Smart grid control                |
| Semiconductor Design | Device optimization               |
| Material Science     | Discovering new materials         |
| Manufacturing        | Process optimization              |
| Wireless Networks    | Resource allocation               |

---

# 1.9 Why RL is Interesting for Scientific Research

Traditional optimization methods often require:

* Gradient information
* Convex objective functions
* Differentiable equations

However, many scientific simulations are:

* Stochastic
* Nonlinear
* Expensive to evaluate
* Non-differentiable
* Multi-objective

RL does not require the optimization problem to be differentiable. It only requires that the environment can evaluate the consequence of an action and produce a reward.

This makes RL attractive for optimization in physics, engineering, and materials science.

---

# 1.10 RL in Your MTJ Optimization Project

Let's now connect these ideas directly to your research.

Your simulator currently works like this:

```
Input Parameters

↓

MTJ Simulation

↓

Generate Random Bits

↓

Evaluate

    KL Divergence
    Entropy
    Energy
    Delay
```

At present, you manually or algorithmically choose parameter values and evaluate the result.

With RL, this process becomes interactive.

```
RL Agent

↓

Choose MTJ Parameters

↓

Run MTJ Simulator

↓

Measure Performance

↓

Compute Reward

↓

RL Learns Better Parameters

↓

Repeat
```

Here, the MTJ simulator becomes the **environment**, and the RL algorithm becomes the **agent**.

Initially, the agent knows nothing. It will try poor parameter combinations, receive poor rewards, and gradually discover combinations that produce higher-quality random numbers with lower energy or delay.

---

# 1.11 An Everyday Analogy: Finding the Best Tea Recipe

Imagine you are trying to make the perfect restaurant-style milk tea.

You can adjust:

* Tea leaves
* Milk powder
* Sugar
* Water
* Boiling time

After each attempt, you taste the tea and assign a score from 0 to 10.

```
Recipe #1 → Score 4

Recipe #2 → Score 6

Recipe #3 → Score 3

Recipe #4 → Score 8

Recipe #5 → Score 9
```

Over many attempts, you naturally learn which adjustments improve the tea.

This is essentially reinforcement learning:

* **State:** Current recipe.
* **Action:** Increase or decrease an ingredient or cooking time.
* **Reward:** Taste score.
* **Environment:** The cooking process.
* **Goal:** Maximize the long-term taste score.

Your MTJ optimization problem follows the same pattern, except the "taste score" is replaced by metrics such as KL divergence, entropy, energy consumption, and switching reliability.

---

# Key Takeaways

By the end of this section, you should remember the following ideas:

1. Reinforcement Learning is a form of machine learning where an agent learns through interaction rather than labeled examples.
2. Learning occurs through **trial and error**, guided by rewards and penalties.
3. RL is designed for **sequential decision-making**, where actions influence future outcomes.
4. Exploration (trying new actions) and exploitation (using known good actions) must be balanced.
5. Many scientific optimization problems, including MTJ optimization, naturally fit the RL framework because they involve repeated interaction with a simulator and evaluation through performance metrics.
6. In your research, the **MTJ simulator will serve as the environment**, and the RL agent will iteratively learn parameter settings that maximize device performance.

---

## Exercises

Before moving to Section 2, try these conceptual exercises without worrying about equations.

1. For each of the following problems, identify whether **Supervised Learning**, **Unsupervised Learning**, or **Reinforcement Learning** is the most appropriate approach, and explain why:

   * Image classification
   * Robot arm learning to grasp objects
   * Customer segmentation
   * MTJ parameter optimization
   * Predicting tomorrow's solar irradiance

2. For the MTJ optimization problem, list at least **five possible actions** that an RL agent could take.

3. Suggest **three different reward functions** that could encourage the agent to improve TRNG quality while reducing energy consumption.

4. Think about why a simple supervised learning model would struggle to replace RL for this optimization task.

In **Section 2**, we will formalize everything introduced here using the **Markov Decision Process (MDP)**, the mathematical framework that underpins nearly every modern reinforcement learning algorithm.
