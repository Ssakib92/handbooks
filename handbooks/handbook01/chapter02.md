# Chapter 2.1 — Atomic Structure, Orbitals, and Quantum States

The remarkable diversity of solid materials originates from one of the simplest building blocks in nature—the atom. Every crystal, metal, semiconductor, insulator, and magnetic material is ultimately an assembly of atoms arranged in specific patterns. Yet the physical properties of these materials are not determined merely by the existence of atoms, but by **how their electrons are organized and how those electrons interact with neighboring atoms**.

The previous chapter emphasized that the macroscopic properties of solids emerge from microscopic physics. To understand why energy bands form, why different types of chemical bonds exist, and why materials exhibit such diverse electrical and optical properties, we must first understand the internal structure of an atom. In particular, we must answer several fundamental questions:

* What is the structure of an atom?
* Why do electrons occupy discrete energy levels instead of arbitrary energies?
* How are these energy levels organized?
* What determines the arrangement of electrons around the nucleus?
* Why can only certain electrons occupy a given quantum state?

These questions are answered by quantum mechanics, which replaces the classical picture of electrons orbiting the nucleus with a fundamentally different description based on wavefunctions and probability distributions.

This chapter develops the quantum mechanical description of atomic structure that forms the foundation for the study of chemical bonding and, ultimately, the electronic structure of crystalline solids.

---

# 2.1.1 From Classical Atoms to Quantum Atoms

The concept of the atom has evolved through centuries of scientific investigation. Early philosophical ideas viewed atoms simply as indivisible particles, but modern experiments revealed that atoms themselves possess rich internal structure.

At the beginning of the twentieth century, Ernest Rutherford's famous gold foil experiment demonstrated that almost all of an atom's mass is concentrated within an extremely small, positively charged nucleus. Electrons occupy the surrounding region, producing an atom that is largely empty space.

A simplified representation is

```text
                Electron cloud
          . . . . . . . . . . .
       .                         .
     .                             .
    .            (+) Nucleus         .
     .                             .
       .                         .
          . . . . . . . . . . .
```

The nucleus contains

* positively charged **protons**
* electrically neutral **neutrons**

while the surrounding electron cloud contains negatively charged **electrons**.

The characteristic sizes illustrate the enormous separation between the nucleus and the electron cloud.

Typical nuclear radius:

$$
R_n \approx 10^{-15}\ \text{m}
$$

Typical atomic radius:

$$
R_a \approx 10^{-10}\ \text{m}
$$

Thus,

$$
\frac{R_a}{R_n}\approx10^5.
$$

An atom is therefore almost entirely empty space, despite appearing as a solid object on macroscopic scales.

---

## Fundamental Particles

The three principal constituents of ordinary matter are summarized below.

| Particle | Symbol    | Charge | Approximate Mass                  | Location       |
| -------- | --------- | ------ | --------------------------------- | -------------- |
| Electron | \(e^{-}\) | \(-e\) | \(9.11\times10^{-31}\,\text{kg}\) | Electron cloud |
| Proton   | \(p\)     | \(+e\) | \(1.67\times10^{-27}\,\text{kg}\) | Nucleus        |
| Neutron  | \(n\)     | 0      | \(1.67\times10^{-27}\,\text{kg}\) | Nucleus        |

where the elementary charge is

$$
e=1.602\times10^{-19}\ \text{C}.
$$

Although the nucleus contains nearly all of the atom's mass, the electrons almost entirely determine the atom's chemical and physical behavior. Since solid-state physics is primarily concerned with electrical, optical, and bonding properties, the electronic structure will be our main focus.

---

# 2.1.2 The Quantum Mechanical Description of Electrons

In classical mechanics, one might imagine an electron orbiting the nucleus in much the same way that a planet orbits the Sun. While this analogy is historically important, it is fundamentally incorrect.

According to classical electrodynamics, an accelerating charged particle continuously radiates electromagnetic energy. An orbiting electron would therefore lose energy, spiral inward, and collapse into the nucleus within an extremely short time. The existence of stable atoms immediately demonstrates the inadequacy of this classical picture.

The resolution came through quantum mechanics.

Rather than following well-defined trajectories, electrons are described by a **wavefunction**, usually denoted by

$$
\psi(\mathbf r,t).
$$

The wavefunction does not specify the exact position of an electron. Instead, it contains all the measurable information about the quantum state of the electron.

The quantity

$$
|\psi(\mathbf r,t)|^2
$$

represents the **probability density**, meaning that

$$
|\psi|^2\,dV
$$

gives the probability of finding the electron within an infinitesimal volume \(dV\).

Consequently, electrons occupy **probability distributions** rather than classical trajectories.

This interpretation represents one of the most profound conceptual shifts introduced by quantum mechanics. The electron cloud surrounding the nucleus is not a cloud of tiny particles moving along fixed paths, but rather a spatial distribution describing where an electron is most likely to be observed.

---

# 2.1.3 Schrödinger Equation and Atomic States

The behavior of quantum particles is governed by the Schrödinger equation.

For stationary atomic states,

$$
\hat H\psi = E\psi,
$$

where

* \(\hat H\) is the Hamiltonian operator,
* \(\psi\) is the electronic wavefunction,
* \(E\) is the allowed energy of the state.

The Hamiltonian represents the total energy of the electron,

$$
\hat H
=
-\frac{\hbar^2}{2m}\nabla^2
+V(\mathbf r),
$$

where

* the first term represents kinetic energy,
* \(V(\mathbf r)\) is the electrostatic potential generated by the nucleus.

Solving the Schrödinger equation for the hydrogen atom reveals an extraordinary result:

**Only certain discrete energies are allowed.**

Unlike a classical particle, whose energy may vary continuously, an electron bound to a nucleus can occupy only specific energy levels.

These quantized energies are one of the defining characteristics of atoms and form the origin of atomic spectra.

---

# 2.1.4 Atomic Orbitals

The solutions of the Schrödinger equation are called **atomic orbitals**.

An orbital is **not** the path followed by an electron.

Instead, an orbital is a quantum state described by a wavefunction with a particular spatial probability distribution.

Each orbital possesses

* a characteristic energy,
* a characteristic shape,
* a characteristic orientation.

The simplest orbital is the **s orbital**, which is spherically symmetric around the nucleus.

The **p orbitals** possess two lobes separated by a nodal plane.

The **d** and **f** orbitals exhibit progressively more complex geometries.

A qualitative illustration is

```text
s orbital

      ○


p orbitals

   ◐     ◑


d orbital

   ✤
```

These shapes arise directly from the mathematical solutions of the Schrödinger equation rather than from arbitrary assumptions.

The geometry of orbitals later determines

* preferred bonding directions,
* crystal structures,
* orbital overlap,
* electronic band formation.

Thus, orbital geometry has profound consequences for solid-state physics.

---

# 2.1.5 Quantum Numbers

The Schrödinger equation does not merely predict discrete energies; it also reveals that every electronic state is uniquely identified by a set of **quantum numbers**.

These quantum numbers specify the complete quantum state of an electron within an atom.

## Principal Quantum Number \(n\)

The first quantum number,

$$
n=1,2,3,\ldots,
$$

primarily determines the electron's energy and the average size of the orbital.

Larger values of \(n\) correspond to

* larger orbitals,
* higher energy,
* electrons located farther from the nucleus.

These are often referred to as electron shells.

---

## Orbital Angular Momentum Quantum Number \(l\)

For each principal quantum number,

$$
l=0,1,\ldots,n-1.
$$

The quantum number \(l\) determines the orbital shape.

The standard notation is

| \(l\) | Orbital |
| ----- | ------- |
| 0     | s       |
| 1     | p       |
| 2     | d       |
| 3     | f       |

As \(l\) increases, the spatial complexity of the wavefunction also increases.

---

## Magnetic Quantum Number \(m_l\)

For each value of \(l\),

$$
m_l=-l,-l+1,\ldots,l.
$$

This quantum number specifies the spatial orientation of an orbital.

For example,

a p orbital possesses

$$
m_l=-1,\;0,\;+1,
$$

corresponding to three independent orientations that are conventionally associated with

* \(p_x\),
* \(p_y\),
* \(p_z\).

---

## Spin Quantum Number \(m_s\)

Electrons possess an intrinsic form of angular momentum known as **spin**.

The spin quantum number is

$$
m_s=\pm\frac12.
$$

Although often visualized as "spin up" and "spin down," electron spin is an intrinsically quantum property and should not be interpreted literally as a tiny sphere rotating about its axis.

Spin plays an essential role throughout solid-state physics, influencing

* magnetism,
* exchange interactions,
* electronic band structures,
* spintronics,
* quantum information technologies.

---

The four quantum numbers together uniquely specify an electronic state.

| Quantum Number | Symbol  | Determines                        |
| -------------- | ------- | --------------------------------- |
| Principal      | \(n\)   | Energy shell and approximate size |
| Orbital        | \(l\)   | Orbital shape                     |
| Magnetic       | \(m_l\) | Orbital orientation               |
| Spin           | \(m_s\) | Spin state                        |

---

# 2.1.6 Electron Configuration

Knowing the available quantum states naturally leads to another question:

**How do electrons populate these states?**

The arrangement of electrons among atomic orbitals is called the **electron configuration**.

The distribution of electrons is not arbitrary. It follows three fundamental principles that together determine the ground-state electronic structure of atoms.

## Aufbau Principle

The German word *Aufbau* means "building up."

Electrons occupy the lowest available energy states first.

Thus, orbitals are filled approximately in the order

$$
1s
\rightarrow
2s
\rightarrow
2p
\rightarrow
3s
\rightarrow
3p
\rightarrow
4s
\rightarrow
3d
\rightarrow
4p
\rightarrow \cdots
$$

The detailed ordering reflects the quantum mechanical energies of the orbitals rather than simply increasing principal quantum number.

To visualize how electrons fill orbitals according to the Aufbau principle, Hund's rule, and the Pauli exclusion principle, the following interactive diagram is useful.

genui{"learning_viz":{"type_id":"ELECTRON_ORBITAL_FILLING","initial_values":{"atomicNumber":14}}}

The visualization is initialized for silicon (\(Z=14\)), whose electron configuration will become particularly important throughout this handbook because silicon is the prototypical semiconductor.

---

## Hund's Rule

When orbitals possess the same energy, electrons first occupy separate orbitals with parallel spins before pairing.

This minimizes electron-electron repulsion and lowers the total energy of the atom.

For example,

```text
Correct

↑   ↑   ↑

Incorrect

↑↓  □   □
```

The first arrangement is energetically preferred because the electrons remain in different orbitals before pairing.

---

# 2.1.7 The Pauli Exclusion Principle

Among the most important principles in quantum mechanics is the **Pauli exclusion principle**, formulated by Wolfgang Pauli in 1925.

It states:

> **No two electrons in the same atom can possess identical sets of all four quantum numbers.**

Since every orbital is specified by

$$
(n,l,m_l),
$$

only two electrons may occupy that orbital, and they must have opposite spins,

$$
m_s=+\frac12
\quad\text{and}\quad
m_s=-\frac12.
$$

Thus,

```text
Allowed

↑↓

Not allowed

↑↑
```

The Pauli exclusion principle is far more than a rule for filling atomic orbitals. It is a direct consequence of the quantum mechanical nature of electrons as **fermions**, particles with half-integer spin whose many-particle wavefunction must be antisymmetric under particle exchange.

This single principle profoundly influences the structure of matter. It determines the periodic table, governs the arrangement of electrons within atoms, and ultimately leads to the formation of energy bands in solids. As neighboring atoms are brought together in a crystal, electrons cannot all occupy the same quantum state. The resulting splitting of atomic energy levels into large numbers of closely spaced states is the microscopic origin of electronic band structure, a concept that will become central in later chapters.

The atomic picture developed in this chapter therefore provides much more than an understanding of isolated atoms. It establishes the quantum mechanical language needed to explain chemical bonding, crystal formation, and the electronic properties of solids. In the next chapter, these quantum states will no longer belong to isolated atoms but will begin to interact, revealing how the sharing and redistribution of electrons give rise to the various types of chemical bonds that hold solids together.

# Chapter 2.2 — Chemical Bonding and the Origin of Material Properties

The previous chapter established that the electrons surrounding an atom occupy discrete quantum states governed by the Schrödinger equation, quantum numbers, and the Pauli exclusion principle. These electronic states determine the distribution of charge around each atom and therefore govern how atoms interact when they approach one another.

An isolated atom rarely exists alone. In nature, atoms generally lower their total energy by forming bonds with neighboring atoms, producing molecules, crystals, and extended solids. The properties of a solid are therefore determined not only by the constituent atoms but also by the nature of the forces that bind them together.

This observation marks a fundamental transition in our study of solid-state physics. Having understood the quantum states of individual atoms, we now examine how these atoms combine to form solids. The type of chemical bonding establishes the equilibrium arrangement of atoms, influences the crystal structure that forms, and ultimately determines electrical conductivity, mechanical strength, thermal transport, optical response, and many other physical properties.

Throughout the remainder of this handbook, chemical bonding will repeatedly appear as the microscopic origin of the macroscopic behavior of materials.

---

# 2.2.1 Why Do Atoms Form Bonds?

A collection of isolated atoms possesses a certain total energy. When two atoms are brought together, several interactions occur simultaneously.

* The positively charged nuclei repel each other through Coulomb forces.
* Electrons repel one another because they carry the same negative charge.
* Electrons are attracted to the nuclei of both atoms.
* The electronic wavefunctions begin to overlap.

These competing interactions determine whether bonding occurs.

If the attractive interactions dominate at a particular separation, the total energy decreases, making the bonded state more stable than the isolated atoms. Conversely, if repulsive interactions dominate, the atoms separate.

This balance between attraction and repulsion produces a characteristic potential energy curve.

```text
Potential Energy

↑
│
│          Repulsion
│            /
│           /
│          /
│         /
│        /
│       /
│      /\
│     /  \______
│    /          \________
│___/____________________________→ Interatomic Distance
          r₀
```

The minimum of the curve corresponds to the **equilibrium bond length**, denoted by \(r_0\). At this separation,

* the attractive and repulsive forces exactly balance,
* the total energy is minimized,
* the bonded configuration is stable.

Since force is related to the gradient of the potential energy,

$$
F(r)=-\frac{dU(r)}{dr},
$$

the equilibrium condition is

$$
\left.\frac{dU}{dr}\right|_{r=r_0}=0.
$$

The depth of the energy minimum represents the **bond energy**, which measures the energy required to separate the bonded atoms into isolated atoms.

A deeper potential well corresponds to a stronger bond.

---

# 2.2.2 The Quantum Mechanical Origin of Chemical Bonds

Although chemical bonds are often introduced using electrostatic arguments, their true origin is quantum mechanical.

When atoms approach one another, their electronic wavefunctions overlap. The electrons are no longer confined exclusively to one nucleus but become distributed over multiple atoms. This redistribution modifies both the kinetic and electrostatic energy of the electronic system.

Whether a stable bond forms depends on the total energy of the combined system,

$$
E_{\text{total}}
=
E_{\text{kinetic}}
+
E_{\text{electrostatic}}
+
E_{\text{exchange}}
+
E_{\text{correlation}}.
$$

While a complete treatment requires solving the many-electron Schrödinger equation, an important qualitative principle is sufficient for understanding bonding:

> **Atoms bond when the total energy of the combined system is lower than the energy of the isolated atoms.**

Thus, bonding is fundamentally an energy minimization process constrained by quantum mechanics.

The specific way in which electrons redistribute determines the type of bond that forms. Four bonding mechanisms are particularly important in solid-state physics:

* Covalent bonding
* Ionic bonding
* Metallic bonding
* van der Waals bonding

Most real materials exhibit one dominant bonding type, although many possess significant contributions from multiple bonding mechanisms.

---

# 2.2.3 Covalent Bonding

Covalent bonding arises when neighboring atoms **share valence electrons**. Rather than transferring electrons from one atom to another, the participating atoms contribute electrons to a common electronic state that extends over both nuclei.

This type of bonding is particularly common among elements with similar electronegativities and partially filled outer shells.

Consider two hydrogen atoms. Each atom possesses one electron. As the atoms approach, the electron wavefunctions overlap, allowing the electrons to be shared between both nuclei.

```text
Before bonding

H•          •H


After bonding

H : H
```

The shared electrons increase the electron density between the nuclei, strengthening the attractive interaction and lowering the total energy.

The same principle extends to solids.

Silicon, germanium, and diamond each contain four valence electrons. Every atom shares one electron with each of four neighboring atoms, producing a tetrahedral network.

```text
          Si
         / | \
        /  |  \
      Si---Si---Si
        \  |  /
         \ | /
          Si
```

Each bond contains a shared pair of electrons.

This arrangement satisfies the valence requirements of every atom while minimizing the total energy.

The directional nature of orbital overlap is one of the defining characteristics of covalent bonding. The shared electron density exists primarily along specific directions determined by the geometry of the participating orbitals. Consequently, covalently bonded solids often exhibit well-defined crystal structures and strong mechanical rigidity.

The importance of orbital geometry becomes particularly evident through **hybridization**. In silicon and diamond, the atomic \(s\) and \(p\) orbitals combine to form four equivalent \(sp^3\) hybrid orbitals directed toward the corners of a tetrahedron. This directional bonding is responsible for the diamond crystal structure that will be studied in the next chapter.

Because the bonding electrons are localized between neighboring atoms, they are not free to move throughout the crystal. As a result, pure covalent materials are generally poor electrical conductors unless thermal excitation or doping introduces mobile charge carriers.

---

# 2.2.4 Ionic Bonding

Ionic bonding occurs when electrons are transferred from one atom to another rather than shared.

This process usually takes place between atoms with significantly different electronegativities. One atom readily loses electrons, becoming positively charged, while the other gains electrons and becomes negatively charged.

The resulting electrostatic attraction between oppositely charged ions forms the bond.

A classic example is sodium chloride.

The sodium atom has one valence electron,

$$
3s^1,
$$

which can be removed relatively easily.

Chlorine possesses seven valence electrons,

$$
3s^23p^5,
$$

and requires only one additional electron to complete its outer shell.

The electron transfer proceeds schematically as

```text
Na  →  Na⁺ + e⁻

Cl + e⁻ → Cl⁻
```

The resulting ions attract through Coulomb's law,

$$
F
=
\frac{1}{4\pi\varepsilon_0}
\frac{|q_1q_2|}{r^2}.
$$

Unlike covalent bonds, ionic bonds are essentially **non-directional**. Every positive ion interacts electrostatically with many neighboring negative ions.

This produces highly symmetric crystal structures, such as the rock-salt structure of NaCl.

```text
Cl⁻   Na⁺   Cl⁻

 Na⁺  Cl⁻  Na⁺

Cl⁻   Na⁺   Cl⁻
```

The absence of mobile electrons makes most ionic solids excellent electrical insulators in the solid state. However, when melted or dissolved in water, the ions become free to move, allowing ionic conduction.

Because ionic interactions are strong, these materials often possess

* high melting temperatures,
* high hardness,
* good chemical stability.

At the same time, shifting one atomic plane relative to another can bring ions of the same charge into close proximity, creating strong electrostatic repulsion. Consequently, many ionic crystals fracture rather than deform plastically, making them brittle.

---

# 2.2.5 Metallic Bonding

Metals exhibit a fundamentally different bonding mechanism.

Many metallic atoms possess only a few weakly bound valence electrons. Rather than remaining associated with individual atoms, these electrons become delocalized throughout the crystal.

The metal may therefore be viewed as

* a periodic array of positively charged ion cores,
* immersed in a common sea of mobile electrons.

```text
Positive ion cores

⊕     ⊕     ⊕

 ~ ~ ~ ~ ~ ~ ~ ~
 Free electrons
 ~ ~ ~ ~ ~ ~ ~ ~

⊕     ⊕     ⊕
```

The electrostatic attraction between the electron cloud and the positive ion cores stabilizes the crystal.

Unlike covalent bonds, metallic bonding is largely non-directional. Since the electrons are shared collectively by all atoms rather than confined to specific pairs, the bonding remains intact even when atomic planes slide past one another.

This explains why metals are generally ductile and malleable.

The presence of freely moving electrons also accounts for many familiar properties of metals:

* high electrical conductivity,
* high thermal conductivity,
* metallic luster,
* efficient heat transport.

These free electrons will later be described quantitatively using the Drude and Sommerfeld free-electron models.

---

# 2.2.6 van der Waals Bonding

Not all solids are held together by strong primary bonds.

Even electrically neutral atoms or molecules experience weak attractive forces arising from fluctuations in their electronic charge distributions. These interactions are collectively known as **van der Waals forces**.

At any instant, the electron cloud surrounding an atom may become slightly asymmetric, creating a temporary electric dipole. This transient dipole induces dipoles in neighboring atoms, producing a weak attractive interaction.

Although the instantaneous dipoles fluctuate continuously, their time-averaged effect is sufficient to bind atoms or molecules together at sufficiently short distances.

Van der Waals bonding is much weaker than covalent, ionic, or metallic bonding.

Nevertheless, it plays an essential role in many important materials.

Layered crystals such as graphite illustrate this particularly well.

Within each graphene layer, carbon atoms are connected through strong covalent bonds.

Between neighboring layers, however, only weak van der Waals interactions exist.

```text
──────────────
 Strong covalent
──────────────

⋮
Weak van der Waals
⋮

──────────────
 Strong covalent
──────────────
```

Because the interlayer bonding is weak, the layers slide easily over one another, giving graphite its lubricating properties.

The same principle enables the isolation of graphene by mechanically separating individual atomic layers.

Many modern two-dimensional materials, including hexagonal boron nitride and transition metal dichalcogenides, are likewise composed of strongly bonded atomic sheets held together by weak van der Waals interactions. This unique combination of strong in-plane bonding and weak interlayer attraction underlies the rapidly growing field of van der Waals heterostructures.

---

# 2.2.7 Comparison of Bonding Types

Although all chemical bonds ultimately arise from electromagnetic interactions governed by quantum mechanics, the redistribution of electrons differs significantly among bonding mechanisms.

| Bond Type     | Electron Behavior                                 | Directionality         | Typical Conductivity | Representative Materials    |
| ------------- | ------------------------------------------------- | ---------------------- | -------------------- | --------------------------- |
| Covalent      | Shared between neighboring atoms                  | Strongly directional   | Low to moderate      | Diamond, Silicon, Germanium |
| Ionic         | Transferred between atoms                         | Mostly non-directional | Insulating (solid)   | NaCl, MgO, Al₂O₃            |
| Metallic      | Delocalized throughout crystal                    | Weakly directional     | Very high            | Cu, Al, Ag                  |
| van der Waals | Weak interactions between neutral atoms or layers | Weak                   | Usually low          | Graphite, hBN, MoS₂         |

This classification is a useful conceptual framework, but real materials often exhibit mixed bonding character. For example, gallium arsenide possesses predominantly covalent bonding with a noticeable ionic contribution due to the difference in electronegativity between gallium and arsenic. Such mixed bonding influences its electronic structure and optical properties, making it a technologically important semiconductor.

---

# 2.2.8 Bonding and Material Properties

Chemical bonding is the microscopic origin of many macroscopic properties observed in solids. The arrangement of electrons within a bond determines not only how strongly atoms are held together but also how the material responds to electrical, thermal, optical, and mechanical stimuli.

The relationship between bonding and material behavior can be summarized qualitatively.

| Bonding Characteristic      | Physical Consequence                                   |
| --------------------------- | ------------------------------------------------------ |
| Strong bond energy          | High melting temperature and stiffness                 |
| Directional bonding         | Specific crystal structures and anisotropic properties |
| Delocalized electrons       | High electrical and thermal conductivity               |
| Localized bonding electrons | Low electrical conductivity                            |
| Weak interatomic forces     | Easy cleavage and layered structures                   |
| Large electron transfer     | High ionic character and insulating behavior           |

Bond strength is closely related to the curvature of the interatomic potential near the equilibrium separation. A steep potential well indicates that even small displacements require significant restoring forces, resulting in a large elastic modulus and high mechanical stiffness. Conversely, shallow potentials correspond to softer materials with lower melting temperatures.

The electronic nature of bonding also determines optical behavior. Materials with tightly bound electrons generally require higher photon energies for electronic excitation, whereas delocalized electrons in metals readily interact with electromagnetic waves, producing their characteristic reflectivity and luster.

Perhaps most importantly for the remainder of this handbook, bonding governs the overlap of atomic orbitals. As atoms assemble into a crystal, the degree of orbital overlap determines how discrete atomic energy levels evolve into continuous energy bands. Consequently, chemical bonding provides the essential bridge between isolated atomic physics and the electronic band theory of solids.

In the next chapter, we build upon this foundation by examining how bonded atoms arrange themselves into highly ordered periodic structures known as **crystals**. We will see that the symmetry and periodicity of these structures provide the framework upon which the quantum mechanics of electrons in solids is constructed.

