Yes. For this demo I'll use a topic that is a little more mathematically demanding, because that better demonstrates what I would do differently in the **actual handbook generation**.

I'll use **Fermi–Dirac statistics and the semiconductor Fermi level**, since this is exactly the kind of topic where physical intuition, derivation, equations, and device interpretation need to work together.

---

# Demo Chapter — Fermi–Dirac Statistics and the Semiconductor Fermi Level

## 1. Why This Matters

A semiconductor contains an enormous number of allowed quantum states, but those states are not occupied arbitrarily. Their occupation is governed by the statistics of the charge carriers.

This immediately leads to an important question:

> **Given a semiconductor at temperature \(T\), how do we determine the probability that an available electronic state is occupied?**

The answer is provided by **Fermi–Dirac statistics**.

This concept is fundamental because quantities such as electron concentration, hole concentration, conductivity, carrier injection, and ultimately device current depend on the distribution of carriers among available energy states.

The Fermi level therefore acts as a central bridge between **solid-state physics and semiconductor device physics**.

---

# 2. From Allowed States to Occupation Probability

Consider an electronic state with energy \(E\).

Because electrons are fermions, the Pauli exclusion principle prevents two electrons from occupying the same quantum state with identical quantum numbers.

For a system in thermal equilibrium, the probability that a state of energy \(E\) is occupied is

$$
\boxed{
f(E)=
\frac{1}
{\exp\left(\frac{E-E_F}{k_BT}\right)+1}
}
$$

where

* \(f(E)\) is the occupation probability,
* \(E_F\) is the Fermi level,
* \(k_B\) is Boltzmann's constant,
* \(T\) is absolute temperature.

The equation contains a remarkably useful physical reference point.

Set

$$
E=E_F.
$$

Then

$$
f(E_F)
=
\frac{1}{e^0+1}
=
\frac{1}{2}.
$$

Therefore,

$$
\boxed{f(E_F)=\frac{1}{2}}
$$

at any nonzero temperature under equilibrium Fermi–Dirac statistics.

So the Fermi level can be viewed as the energy at which an available state has a **50% occupation probability**.

---

# 3. Physical Intuition

It is tempting to think of the Fermi level as an energy that electrons “sit at.”

That interpretation is incorrect.

The Fermi level is not generally the energy of the electrons.

Instead, it is a **statistical reference energy that determines how electronic states are occupied**.

Imagine the available states arranged vertically according to energy:

```text
Energy ↑

        Higher energy
             │
             │     Mostly empty
             │
─────────────┼────────────  E_F
             │     f = 1/2
             │
             │     Mostly occupied
             │
        Lower energy
```

States far below \(E_F\) have

$$
f(E)\approx1,
$$

while states far above \(E_F\) have

$$
f(E)\approx0.
$$

The transition between these two regimes becomes sharper as temperature decreases.

---

# 4. The Zero-Temperature Limit

The physical meaning becomes especially clear by considering

$$
T\rightarrow0.
$$

For

$$
E<E_F,
$$

the quantity

$$
\frac{E-E_F}{k_BT}
$$

approaches a large negative value, so

$$
f(E)\rightarrow1.
$$

For

$$
E>E_F,
$$

it approaches a large positive value, giving

$$
f(E)\rightarrow0.
$$

Thus, at absolute zero,

$$
\boxed{
f(E)=
\begin{cases}
1, & E<E_F,\\[4pt]
0, & E>E_F.
\end{cases}
}
$$

The occupation distribution becomes a sharp step.

At finite temperature, thermal energy allows some electrons to occupy states above the Fermi level while leaving some states below it unoccupied.

---

# 5. Fermi–Dirac Statistics in a Semiconductor

A semiconductor differs from a simple metal because its electronic states are separated into bands.

The important energies are:

* \(E_C\): conduction-band edge
* \(E_V\): valence-band edge
* \(E_F\): Fermi level
* \(E_g=E_C-E_V\): bandgap

A simplified energy diagram is

```text
Energy ↑

        ┌──────────────────┐
 E_C →  │ Conduction Band  │
        └──────────────────┘

             Bandgap
                E_g

        ┌──────────────────┐
 E_V →  │   Valence Band   │
        └──────────────────┘
```

The carrier concentrations are determined by combining two pieces of information:

1. **How many states are available?**
2. **What fraction of those states are occupied?**

This distinction is crucial.

The Fermi–Dirac function tells us the **occupation probability**.

The density of states tells us **how many states exist at each energy**.

Therefore, the carrier concentration must involve both.

---

# 6. Electron Concentration

The number of electrons occupying conduction-band states is obtained by integrating the product of the density of states and occupation probability:

$$
\boxed{
n=
\int_{E_C}^{\infty}
g_C(E)f(E)\,dE
}
$$

For a three-dimensional parabolic conduction band, the density of states takes the form

$$
g_C(E)
=
\frac{1}{2\pi^2}
\left(
\frac{2m_n^*}{\hbar^2}
\right)^{3/2}
\sqrt{E-E_C},
\qquad E\ge E_C.
$$

Therefore,

$$
n=
\int_{E_C}^{\infty}
\frac{1}{2\pi^2}
\left(
\frac{2m_n^*}{\hbar^2}
\right)^{3/2}
\sqrt{E-E_C}
\,f(E)\,dE.
$$

This equation is conceptually important even when we later use simpler approximations.

It tells us that **carrier concentration is fundamentally a state-counting problem weighted by quantum-statistical occupation**.

---

# 7. Nondegenerate Semiconductor Approximation

For many ordinary semiconductor devices, the Fermi level lies sufficiently below the conduction-band edge that

$$
E_C-E_F\gg k_BT.
$$

In this regime,

$$
\exp\left(\frac{E-E_F}{k_BT}\right)\gg1.
$$

The \(+1\) in the Fermi–Dirac distribution can therefore be neglected:

$$
f(E)
\approx
\exp\left(
-\frac{E-E_F}{k_BT}
\right).
$$

This is the **Maxwell–Boltzmann approximation**.

Substituting this into the carrier-concentration integral gives

$$
\boxed{
n
=
N_C
\exp\left(
-\frac{E_C-E_F}{k_BT}
\right)
}
$$

where \(N_C\) is the effective density of states of the conduction band:

$$
\boxed{
N_C=
2
\left(
\frac{2\pi m_n^*k_BT}{h^2}
\right)^{3/2}.
}
$$

Similarly, for holes,

$$
\boxed{
p=
N_V
\exp\left(
-\frac{E_F-E_V}{k_BT}
\right)
}
$$

where

$$
N_V=
2
\left(
\frac{2\pi m_p^*k_BT}{h^2}
\right)^{3/2}.
$$

These two equations are among the most frequently used equations in semiconductor physics.

---

# 8. What the Equations Actually Tell Us

Consider

$$
n=
N_C
e^{-(E_C-E_F)/(k_BT)}.
$$

Suppose \(E_F\) moves upward toward \(E_C\).

Then

$$
E_C-E_F
$$

becomes smaller, so the exponential suppression decreases.

Therefore,

$$
n\uparrow.
$$

In other words:

$$
\boxed{
E_F\rightarrow E_C
\quad\Rightarrow\quad
n\rightarrow\text{larger}
}
$$

Likewise,

$$
\boxed{
E_F\rightarrow E_V
\quad\Rightarrow\quad
p\rightarrow\text{larger}.
}
$$

This gives the Fermi level a very useful physical interpretation:

> **The position of the Fermi level encodes the relative tendency of the semiconductor to contain electrons and holes.**

---

# 9. Intrinsic Semiconductor

For an intrinsic semiconductor,

$$
n=p=n_i.
$$

Using the nondegenerate expressions,

$$
n_i
=
N_C
\exp\left(
-\frac{E_C-E_F}{k_BT}
\right)
$$

and

$$
n_i
=
N_V
\exp\left(
-\frac{E_F-E_V}{k_BT}
\right).
$$

Multiplying these equations gives

$$
n_i^2
=
N_CN_V
\exp\left(
-\frac{E_C-E_V}{k_BT}
\right).
$$

Since

$$
E_C-E_V=E_g,
$$

we obtain

$$
\boxed{
n_i
=
\sqrt{N_CN_V}
\exp\left(
-\frac{E_g}{2k_BT}
\right)
}
$$

This equation immediately shows why the intrinsic carrier concentration is extremely sensitive to the bandgap and temperature.

A larger bandgap means a much stronger exponential suppression of thermally generated carriers.

---

# 10. Device-Level Interpretation

This statistical picture directly explains why doping works.

Suppose donor atoms are introduced into a semiconductor.

The donors provide electrons, increasing the electron concentration. To accommodate this changed carrier population under equilibrium, the Fermi level shifts upward toward the conduction band.

Similarly, acceptor doping increases the hole concentration and shifts the Fermi level toward the valence band.

Thus:

$$
\boxed{
\text{Doping}
\rightarrow
\text{carrier concentration}
\rightarrow
\text{Fermi-level shift}
}
$$

This is not merely a graphical convention.

The Fermi-level position is a quantitative consequence of the carrier statistics.

---

# 11. Research-Level Perspective: When the Approximation Breaks

The Maxwell–Boltzmann approximation is extremely useful, but it is not universally valid.

When the carrier concentration becomes sufficiently high, the Fermi level can approach or enter a conduction or valence band.

The semiconductor then becomes **degenerate**, and we must retain the full Fermi–Dirac distribution:

$$
f(E)=
\frac{1}
{e^{(E-E_F)/(k_BT)}+1}.
$$

This becomes important in situations such as:

* heavily doped semiconductors,
* highly injected devices,
* nanoscale structures,
* low-temperature transport,
* quantum-confined systems,
* some 2D materials.

For emerging devices, this distinction can become particularly important because the assumptions behind conventional semiconductor statistics may fail as dimensionality, carrier density, and quantum confinement change.

---

# 12. A Useful Mental Model

The entire discussion can be compressed into one conceptual chain:

$$
\boxed{
\text{Band structure}
\rightarrow
\text{Density of states}
\rightarrow
\text{Occupation probability}
\rightarrow
\text{Carrier concentration}
\rightarrow
\text{Device behavior}
}
$$

The density of states tells us **where states exist**.

Fermi–Dirac statistics tells us **how those states are occupied**.

Their combination tells us **how many carriers are actually present**.

That carrier population then determines electrical behavior.

---

# 13. Key Equations

For quick reference:

### Fermi–Dirac distribution

$$
\boxed{
f(E)=
\frac{1}
{e^{(E-E_F)/(k_BT)}+1}
}
$$

### Electron concentration

$$
\boxed{
n=
\int_{E_C}^{\infty}g_C(E)f(E)\,dE
}
$$

### Nondegenerate electron concentration

$$
\boxed{
n=N_Ce^{-(E_C-E_F)/(k_BT)}
}
$$

### Hole concentration

$$
\boxed{
p=N_Ve^{-(E_F-E_V)/(k_BT)}
}
$$

### Intrinsic carrier concentration

$$
\boxed{
n_i=
\sqrt{N_CN_V}
e^{-E_g/(2k_BT)}
}
$$

---

# 14. Connection to the Handbook Series

This topic sits directly at the boundary between **Handbook 2 — Solid State Physics for Device Researchers** and **Handbook 3 — Semiconductor Device Physics**.

The dependency is:

$$
\boxed{
\text{Quantum Mechanics}
\rightarrow
\text{Band Structure}
\rightarrow
\text{Density of States}
\rightarrow
\text{Fermi–Dirac Statistics}
\rightarrow
\text{Carrier Concentration}
\rightarrow
\text{Transport}
\rightarrow
\text{Devices}
}
$$

Later, the same framework will reappear in **2D materials**, where the density of states, band structure, quantum confinement, and carrier statistics can behave very differently from conventional 3D semiconductors.

---

### What is different about this format

This is closer to the format I'd use for the **actual handbook**.

I am not trying to make every paragraph fit a predetermined textbook template. Instead, the mathematics develops naturally from the physical question:

**What states exist? → How are they occupied? → How many carriers result? → What does that mean for a device?**

For a real chapter, I would go substantially further—e.g. derive \(N_C\) from the 3D density of states, discuss intrinsic Fermi-level position, derive the mass-action law, treat degeneracy and Fermi integrals, and connect the result to actual device structures. The response format itself would remain essentially like this.
