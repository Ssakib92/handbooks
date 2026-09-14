# Chapter 8.1 — The Drude Model

The previous chapters established the structural foundation of crystalline solids. We began by examining atomic bonding, crystal lattices, reciprocal space, Brillouin zones, and diffraction, ultimately revealing how atoms arrange themselves into highly ordered periodic structures. While diffraction provides experimental confirmation of this periodicity, it does not explain one of the most fundamental questions in solid-state physics:

> **Why do some solids conduct electricity extremely well, while others behave as insulators?**

Copper wires readily carry electric current, silver exhibits even higher electrical conductivity, while diamond, despite being composed entirely of carbon atoms like graphite, is an excellent electrical insulator. These striking differences cannot be understood solely from crystal structure; they require a theory describing the motion of electrons within solids.

The first successful microscopic model of electrical conduction was proposed by **Paul Drude** in 1900. Although developed before the advent of quantum mechanics, the Drude model provided a remarkably successful explanation for many macroscopic electrical and thermal properties of metals. Its central idea is both simple and profound: metals contain a large number of mobile electrons that behave much like the molecules of a classical gas.

From today's perspective, the Drude model is incomplete. It ignores quantum mechanics, electron wave nature, and the periodic potential of the crystal lattice. Nevertheless, it introduced concepts such as electrical conductivity, electron mobility, drift velocity, and mean free time that remain fundamental in modern solid-state physics. More importantly, it provides a natural starting point from which increasingly sophisticated models can be developed.

---

# 8.1.1 Why Metals Conduct Electricity

Consider an isolated atom.

The outermost electrons are bound to the nucleus by the Coulomb force.

Removing one of these electrons requires energy because it occupies a bound quantum state.

When many atoms combine to form a metal, however, the situation changes dramatically.

The outer (valence) electrons are only weakly bound to individual atoms. As neighboring atoms approach one another, their outer orbitals overlap extensively. Rather than remaining localized around a single nucleus, many of these electrons become **delocalized**, moving throughout the entire crystal.

This picture leads naturally to the central assumption of the Drude model:

> **A metal consists of a lattice of positively charged ions immersed in a gas of freely moving electrons.**

The ions remain essentially fixed at their equilibrium lattice positions, while the conduction electrons move throughout the crystal.

```text
Positive ion lattice

⊕     ⊕     ⊕

    •     •

⊕     ⊕     ⊕

 •         •

⊕     ⊕     ⊕

⊕ : Positive ion

• : Mobile conduction electron
```

This is often called the **electron gas model**.

---

# 8.1.2 Fundamental Assumptions of the Drude Model

The Drude model combines this physical picture with ideas from classical kinetic theory. Its principal assumptions are:

1. Metals contain a large number of free conduction electrons.

2. Electrons obey the laws of classical Newtonian mechanics.

3. Electrons move randomly between collisions.

4. Collisions occur instantaneously.

5. After each collision, the electron loses memory of its previous motion.

6. The positive ions remain fixed and simply provide the background through which electrons move.

7. Electron-electron interactions are neglected.

These assumptions greatly simplify the problem while retaining the essential ingredients needed to describe electrical conduction.

---

# 8.1.3 Random Thermal Motion

Even in the absence of an external electric field, conduction electrons are not stationary.

Instead, they undergo continuous random thermal motion.

```text
Random motion

↗   ←   ↓

   •

↑   ↘   →

Random directions
```

At thermal equilibrium,

electrons move equally in every direction.

Although individual electrons possess substantial velocities,

their motions are completely random.

Consequently,

the average velocity is

$$
\boxed{
\langle \mathbf{v} \rangle = 0.
}
$$

Since equal numbers of electrons move in opposite directions,

there is no net transport of charge and therefore no electrical current.

---

# 8.1.4 Effect of an Electric Field

Now suppose an electric field

$$
\mathbf{E}
$$

is applied to the metal.

Each electron experiences the electric force

$$
\boxed{
\mathbf{F}
=
-q\mathbf{E},
}
$$

where

* \(q\) is the magnitude of the electron charge.

Applying Newton's second law,

$$
m\frac{d\mathbf{v}}{dt}
=
-q\mathbf{E},
$$

or

$$
\boxed{
\frac{d\mathbf{v}}{dt}
=
-\frac{q}{m}\mathbf{E}.
}
$$

Between collisions,

each electron accelerates under the influence of the electric field.

However, collisions repeatedly interrupt this acceleration.

As a result,

electrons do not accelerate indefinitely.

Instead,

they acquire a small average velocity superimposed upon their random thermal motion.

---

# 8.1.5 Mean Free Time

The motion of electrons consists of alternating periods of free acceleration and collisions.

The average time between successive collisions is called the **mean free time**,

$$
\boxed{\tau.}
$$

Typical values are

$$
\tau
\sim
10^{-14}
\text{–}
10^{-15}\ \text{s}
$$

for ordinary metals at room temperature.

The mean free time is one of the most important parameters in transport theory because it determines how long an electron can accelerate before its motion is randomized again.

---

# 8.1.6 Mean Free Path

During the average time

$$
\tau,
$$

an electron travels a characteristic distance known as the **mean free path**,

denoted by

$$
\boxed{\ell.}
$$

If

$$
v
$$

is the average speed,

then

$$
\boxed{
\ell
=
v\tau.
}
$$

The mean free path depends on

* impurities,
* lattice vibrations,
* crystal defects,
* temperature.

High-quality crystals possess longer mean free paths and therefore generally exhibit higher electrical conductivity.

---

# 8.1.7 Drift Velocity

Although electrons move randomly at high speeds,

the electric field introduces a slight preference for motion opposite to the field direction.

This produces a small average velocity called the **drift velocity**,

$$
\boxed{
\mathbf{v}_d.
}
$$

To determine this velocity,

consider that an electron accelerates for approximately the mean free time \(\tau\) before its motion is randomized by a collision.

Using

$$
\mathbf{a}
=
-\frac{q}{m}\mathbf{E},
$$

the average change in velocity is

$$
\mathbf{v}_d
=
\mathbf{a}\tau.
$$

Thus,

$$
\boxed{
\mathbf{v}_d
=
-\frac{q\tau}{m}\mathbf{E}.
}
$$

The negative sign reflects the negative charge of the electron: electrons drift opposite to the applied electric field.

It is important to recognize that the drift velocity is extremely small compared with the random thermal velocity.

Typical values are

* thermal velocity:

$$
10^5
\text{–}
10^6\ \text{m/s},
$$

* drift velocity:

$$
10^{-4}
\text{–}
10^{-2}\ \text{m/s}.
$$

The large current observed in a metal is not due to individual electrons moving rapidly in one direction but rather to the enormous number of electrons each acquiring a tiny average drift velocity.

---

# 8.1.8 Current Density

Suppose the conduction electron concentration is

$$
n,
$$

representing the number of free electrons per unit volume.

Each electron carries charge

$$
-q.
$$

The current density is therefore

$$
\boxed{
\mathbf{J}
=
-nq\mathbf{v}_d.
}
$$

Substituting the expression for the drift velocity,

$$
\mathbf{J}
=
-nq
\left(
-\frac{q\tau}{m}\mathbf{E}
\right),
$$

gives

$$
\boxed{
\mathbf{J}
=
\frac{nq^2\tau}{m}
\mathbf{E}.
}
$$

This equation predicts that the current density is directly proportional to the applied electric field.

This proportionality is the microscopic origin of **Ohm's law**.

---

# 8.1.9 Electrical Conductivity

Macroscopically,

Ohm's law is written as

$$
\boxed{
\mathbf{J}
=
\sigma\mathbf{E},
}
$$

where

$$
\sigma
$$

is the electrical conductivity.

Comparing this with the Drude result,

we obtain

$$
\boxed{
\sigma
=
\frac{nq^2\tau}{m}.
}
$$

This is the fundamental conductivity equation of the Drude model.

It shows that conductivity increases with

* higher electron concentration,
* longer mean free time,
* lower effective inertia of the charge carriers.

Although derived using classical mechanics, this expression remains recognizable in modern transport theory, where the free-electron mass is replaced by the **effective mass** of electrons in a crystal.

---

# 8.1.10 Mobility

The drift velocity is proportional to the electric field,

suggesting the definition of **mobility**,

$$
\boxed{
\mu
=
\frac{|v_d|}{E}.
}
$$

Substituting the drift velocity gives

$$
\boxed{
\mu
=
\frac{q\tau}{m}.
}
$$

Mobility measures how readily charge carriers respond to an applied electric field.

Using this definition,

the conductivity becomes

$$
\boxed{
\sigma
=
nq\mu.
}
$$

This compact equation is widely used in semiconductor physics and remains valid beyond the Drude model when the appropriate carrier mobility is used.

---

# 8.1.11 Thermal Conductivity

The Drude model also provides a qualitative explanation for thermal conduction in metals.

Because electrons move rapidly throughout the crystal, they transport thermal energy from hotter regions to cooler ones.

```text
Hot                  Cold

● ● ● ● ● → → → → → ● ● ●
```

A temperature gradient therefore causes energetic electrons from the hot side to diffuse toward the cold side, carrying energy with them.

This explains why good electrical conductors, such as copper and silver, are also generally excellent thermal conductors.

---

# 8.1.12 Successes of the Drude Model

Despite its simplicity, the Drude model successfully explains several important experimental observations.

It predicts:

* Ohm's law from microscopic principles,
* the existence of electrical conductivity,
* the concept of drift velocity,
* the relationship between conductivity and carrier concentration,
* the dependence of conductivity on scattering,
* the qualitative connection between electrical and thermal conductivity.

Many transport concepts introduced by Drude remain central to modern condensed matter physics, even though their microscopic interpretation has evolved.

---

# 8.1.13 Limitations of the Drude Model

While historically significant, the Drude model ultimately fails to explain several key properties of solids because it treats electrons as classical particles.

Its principal limitations include:

* It ignores the wave nature of electrons.
* It assumes electrons obey classical rather than quantum statistics.
* It neglects the periodic potential created by the crystal lattice.
* It cannot explain why some solids are metals while others are semiconductors or insulators.
* It predicts incorrect values for the electronic contribution to the heat capacity.
* It cannot account for electronic band structure or energy gaps.

These shortcomings arise because electrons in a crystal are fundamentally quantum mechanical objects whose behavior is governed by wavefunctions and the periodicity of the lattice.

---

# 8.1.14 From Classical Particles to Quantum Electrons

The Drude model marks the beginning of the microscopic theory of electrical conduction by replacing phenomenological descriptions with a simple picture based on mobile electrons and classical mechanics. It introduces key transport concepts—drift velocity, mean free time, mean free path, mobility, and conductivity—that remain essential throughout solid-state physics.

At the same time, its limitations reveal the necessity of a deeper framework. Electrons in a crystal do not behave as a classical gas but as quantum particles occupying allowed energy states and obeying the Pauli exclusion principle. Their motion is shaped not only by collisions but also by the periodic potential of the crystal lattice.

The next chapter develops this improved description through the **Sommerfeld free-electron model**, which retains the idea of free electrons but replaces classical mechanics with quantum mechanics and Fermi-Dirac statistics. This transition resolves many of the deficiencies of the Drude model and establishes the foundation for understanding the electronic properties of metals before introducing the full quantum theory of electrons in periodic crystals.

# Chapter 8.2 — The Sommerfeld Model, Fermi Surface, and Limitations of the Free Electron Picture

The Drude model represented the first successful microscopic theory of electrical conduction. By treating conduction electrons as a classical gas moving through a lattice of stationary positive ions, it explained Ohm's law, electrical conductivity, thermal conductivity, and introduced concepts such as drift velocity, mobility, and mean free time.

Despite these successes, the model suffered from fundamental shortcomings. It assumed that electrons obey classical Newtonian mechanics and Maxwell-Boltzmann statistics, leading to predictions that contradicted experimental observations. For example, the electronic contribution to the heat capacity of metals was predicted to be much larger than measured, and the model could not explain why only a small fraction of electrons appear to participate in electrical conduction.

These discrepancies were resolved in 1928 when **Arnold Sommerfeld** reformulated the free-electron theory using the principles of quantum mechanics. Sommerfeld retained Drude's picture of freely moving electrons but replaced classical statistics with **Fermi-Dirac statistics** and incorporated the **Pauli exclusion principle**. This seemingly modest change transformed the theory into one capable of explaining many of the electronic properties of metals with remarkable accuracy.

Although the Sommerfeld model still neglects the periodic potential of the crystal lattice, it represents a major conceptual advance. It introduces the ideas of **quantized electron states**, the **Fermi energy**, and the **Fermi surface**, concepts that remain central throughout modern condensed matter physics.

---

# 8.2.1 Why the Drude Model Fails

The principal weakness of the Drude model is not its assumption that electrons are free, but rather its treatment of electrons as **classical particles**.

According to classical statistical mechanics, particles can occupy any energy continuously, and many particles may occupy exactly the same state. As temperature increases, all particles share thermal energy equally according to the equipartition theorem.

Electrons, however, are fundamentally different.

They are **fermions**, particles with half-integer spin. As discussed in Chapter 2, fermions obey the **Pauli exclusion principle**, which states that no two identical electrons can occupy the same quantum state simultaneously.

Consequently, electrons in a metal do not distribute themselves according to classical statistics. Instead, they fill available quantum states one by one, beginning with the lowest energies.

This simple observation changes the entire description of electron behavior in solids.

---

# 8.2.2 Quantum States of Free Electrons

In the Sommerfeld model, electrons are still assumed to move freely inside the crystal. However, their motion is now described by the **Schrödinger equation** rather than Newton's laws.

For a free electron,

$$
V(\mathbf{r}) = 0,
$$

and the time-independent Schrödinger equation becomes

$$
-\frac{\hbar^2}{2m}\nabla^2\psi(\mathbf{r})
=
E\psi(\mathbf{r}).
$$

The solutions are **plane waves**,

$$
\boxed{
\psi(\mathbf{r})
=
Ae^{i\mathbf{k}\cdot\mathbf{r}},
}
$$

where

* \(A\) is the normalization constant,
* \(\mathbf{k}\) is the wavevector,
* \(E\) is the electron energy.

Unlike the Drude model, which describes electrons by their position and velocity, the Sommerfeld model describes each electron by a quantum wavefunction characterized by the wavevector \(\mathbf{k}\).

---

# 8.2.3 Energy-Momentum Relation

Substituting the plane-wave solution into the Schrödinger equation gives the electron energy,

$$
\boxed{
E
=
\frac{\hbar^2k^2}{2m},
}
$$

where

$$
k
=
|\mathbf{k}|.
$$

This equation is the quantum analogue of the classical kinetic energy,

$$
E
=
\frac{p^2}{2m},
$$

since the momentum of a free electron is

$$
\boxed{
\mathbf{p}
=
\hbar\mathbf{k}.
}
$$

The energy depends only on the magnitude of the wavevector, not its direction.

Consequently, all wavevectors having the same magnitude possess the same energy.

---

# 8.2.4 Quantization of Electron States

A crystal has finite dimensions.

Suppose it occupies a cube of side

$$
L.
$$

To ensure that the electron wavefunction remains single-valued throughout the crystal, periodic boundary conditions are imposed,

$$
\psi(x+L)
=
\psi(x).
$$

These conditions restrict the allowed wavevectors to discrete values,

$$
k_x
=
\frac{2\pi n_x}{L},
$$

$$
k_y
=
\frac{2\pi n_y}{L},
$$

$$
k_z
=
\frac{2\pi n_z}{L},
$$

where

$$
n_x,\;
n_y,\;
n_z
$$

are integers.

Thus, electrons cannot possess arbitrary wavevectors.

Only discrete quantum states are permitted.

---

# 8.2.5 Filling of Electron States

Each allowed quantum state may contain at most

**two electrons**,

one with spin up,

$$
+\frac12,
$$

and one with spin down,

$$
-\frac12.
$$

This is a direct consequence of the Pauli exclusion principle.

As electrons are added to the crystal,

they occupy the lowest available energy states first.

```text
Energy

↑

□

□

□

□

□

Lowest energy
```

Unlike classical particles,

electrons cannot all collapse into the lowest-energy state.

Instead,

they build upward in energy,

forming a "sea" of occupied quantum states.

This collection of occupied states is called the **Fermi sea**.

---

# 8.2.6 The Fermi Energy

At absolute zero,

all electron states are occupied up to a maximum energy,

while all higher-energy states remain empty.

This highest occupied energy is called the **Fermi energy**,

$$
\boxed{
E_F.
}
$$

The Fermi energy is one of the most important quantities in solid-state physics.

It depends only on

* electron concentration,
* electron mass,

and is independent of temperature at \(T=0\).

A useful analogy is to imagine filling a container with water. The water occupies every level from the bottom upward until it reaches a certain height. The water surface separates filled and empty regions. In the same way, electrons fill available quantum states from the lowest energy upward, and the Fermi energy marks the boundary between occupied and unoccupied states at absolute zero.

---

# 8.2.7 The Fermi Wavevector

Since the electron energy depends on the wavevector,

the Fermi energy corresponds to a particular wavevector,

called the **Fermi wavevector**,

$$
\boxed{
k_F.
}
$$

It satisfies

$$
\boxed{
E_F
=
\frac{\hbar^2k_F^2}{2m}.
}
$$

All electron states with

$$
k
<
k_F
$$

are occupied,

while those with

$$
k
>
k_F
$$

are empty at absolute zero.

---

# 8.2.8 The Fermi Surface

Because the free-electron energy depends only on the magnitude of the wavevector,

all states satisfying

$$
k
=
k_F
$$

possess the same energy,

namely,

$$
E_F.
$$

In three-dimensional \(k\)-space,

these states form a sphere.

This sphere is called the **Fermi surface**.

```text
           •••••
       ••       ••
     •             •
    •      ○        •
     •             •
       ••       ••
           •••••
```

The center of the sphere corresponds to

$$
\mathbf{k}=0.
$$

The sphere's radius equals

$$
k_F.
$$

Everything inside the sphere is occupied at absolute zero.

Everything outside is empty.

Although the free-electron model predicts a perfectly spherical Fermi surface, later chapters will show that real crystals often possess highly distorted Fermi surfaces due to the periodic crystal potential.

---

# 8.2.9 Physical Significance of the Fermi Surface

The Fermi surface is much more than a convenient geometric construction.

It separates occupied and unoccupied quantum states and therefore determines which electrons can respond to external perturbations such as electric fields, magnetic fields, or temperature changes.

Electrons deep within the Fermi sea are surrounded by occupied states and cannot easily change their quantum state because the Pauli exclusion principle forbids transitions into already occupied states.

Only electrons very close to the Fermi surface have nearby empty states into which they can move.

Consequently,

despite the enormous number of conduction electrons in a metal,

only a small fraction actively participate in

* electrical conduction,
* heat transport,
* optical absorption.

This insight immediately explains why the Drude model greatly overestimated the electronic heat capacity of metals.

---

# 8.2.10 Temperature and the Fermi Distribution

At absolute zero,

the occupation of electron states is extremely simple:

* all states below \(E_F\) are occupied,
* all states above \(E_F\) are empty.

At finite temperatures,

thermal energy allows a small number of electrons near the Fermi energy to be excited into higher-energy states.

```text
Energy

↑

□□□□□

□□□□□

□□□□□

────── EF

·······

·······
```

The transition from completely occupied to completely empty is no longer perfectly sharp.

Instead,

the occupation probability changes smoothly over an energy range of approximately

$$
k_BT,
$$

where

* \(k_B\) is Boltzmann's constant,
* \(T\) is the absolute temperature.

The mathematical description of this occupation probability—the **Fermi-Dirac distribution**—will be developed in detail in Chapter 13.

---

# 8.2.11 Successes of the Sommerfeld Model

The Sommerfeld model represented a major breakthrough because it combined the free-electron picture with quantum statistics.

It successfully explains:

* the electronic heat capacity of metals,
* electrical conductivity at ordinary temperatures,
* thermal conductivity,
* the Wiedemann-Franz law,
* magnetic properties such as Pauli paramagnetism,
* the existence of the Fermi energy,
* the concept of the Fermi surface.

Many of these predictions agree remarkably well with experimental observations for simple metals such as sodium, potassium, and aluminum.

---

# 8.2.12 Limitations of the Sommerfeld Model

Despite its considerable success, the Sommerfeld model retains one crucial assumption inherited from the Drude model:

> **Electrons are treated as completely free particles.**

In reality, electrons move through the periodic electrostatic potential created by the positively charged ion cores. This periodic potential profoundly modifies their allowed quantum states.

As a consequence, the Sommerfeld model cannot explain several fundamental phenomena:

* why solids exhibit energy bands,
* the existence of forbidden energy gaps,
* the distinction between metals, semiconductors, and insulators,
* anisotropic electronic properties,
* the detailed Fermi surfaces of real crystals,
* effective mass,
* Bloch wavefunctions.

These shortcomings arise because the model neglects the crystal's translational symmetry, which plays a central role in determining electron behavior.

---

# 8.2.13 From Free Electrons to Electrons in a Crystal

The evolution from the Drude model to the Sommerfeld model demonstrates how the introduction of quantum mechanics fundamentally changes our understanding of conduction electrons. By recognizing that electrons are fermions obeying the Pauli exclusion principle and Fermi-Dirac statistics, the Sommerfeld model successfully explains many properties of simple metals and introduces concepts—such as the Fermi energy and the Fermi surface—that remain indispensable throughout condensed matter physics.

Nevertheless, both free-electron models share a common limitation: they ignore the periodic potential generated by the crystal lattice. In a real crystal, electrons are not truly free. Their wavefunctions extend throughout the solid while simultaneously adapting to the underlying periodic arrangement of atoms. This interaction gives rise to Bloch states, energy bands, and band gaps, phenomena that cannot emerge from a free-electron description alone.

The next chapter therefore abandons the assumption of free electrons and addresses the central quantum mechanical problem of solid-state physics: **how electrons behave in a periodic potential**. Beginning with the Schrödinger equation in a periodic lattice and Bloch's theorem, we will establish the theoretical framework from which modern band theory naturally emerges.
