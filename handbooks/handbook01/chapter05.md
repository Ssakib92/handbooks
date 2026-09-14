# Chapter 5.1 — Reciprocal Lattices: The Fourier Viewpoint and Reciprocal Vectors

The previous chapters developed the description of crystals in **real space**. We learned that a crystal is an infinite periodic arrangement of atoms that can be described using a Bravais lattice, a basis, and the translational symmetry of the lattice vectors. Crystal directions, planes, and Miller indices further provided a geometric language for describing orientation within the crystal.

Although this real-space description is intuitive, it is not always the most natural way to analyze physical phenomena. X-ray diffraction, electron diffraction, neutron scattering, lattice vibrations, and the motion of electrons through a periodic crystal are all fundamentally wave phenomena. Waves do not respond directly to atomic positions; instead, they respond to the **periodicity** of the crystal.

To describe periodicity mathematically, solid-state physics introduces a second space, known as **reciprocal space** or **momentum space**. Rather than replacing real space, reciprocal space provides an alternative and often simpler representation of the same crystal. Many problems that are mathematically complicated in real space become remarkably simple when viewed in reciprocal space.

The reciprocal lattice is therefore not merely a mathematical construction. It is the natural language for describing waves in periodic media, forming the foundation for diffraction theory, Bloch's theorem, phonon dispersion, and electronic band structure.

This chapter develops the reciprocal lattice from first principles, beginning with the Fourier description of periodic structures before introducing reciprocal lattice vectors and their construction.

---

# 5.1.1 Why Another Space?

At first glance, introducing a second coordinate system for crystals may seem unnecessary. After all, the real-space lattice already specifies the positions of every atom.

The motivation becomes clear when we consider a simple periodic function.

Suppose a physical quantity repeats every distance \(a\),

$$
f(x+a)=f(x).
$$

This periodicity could represent

* the electron density,
* the electrostatic potential,
* the arrangement of atoms,
* or any other property of the crystal.

One way to describe such a function is to specify its value at every point in space. While this is straightforward, it provides little insight into the underlying periodicity.

An alternative approach is to describe the same function as a sum of simple waves.

```text
Periodic Function

Real Space

████    ████    ████

↓

Sum of sinusoidal waves

~
~~
~~~~
~~~~~~~~
```

This idea forms the basis of **Fourier analysis**.

Instead of describing *where* atoms are located, Fourier analysis describes *which spatial frequencies* are present in the crystal.

For periodic systems, this wave-based description is often much more powerful than the coordinate-based description.

---

# 5.1.2 Fourier Representation of Periodic Structures

One of the central results of Fourier analysis states that every periodic function can be expressed as a sum of sinusoidal waves.

In one dimension,

$$
f(x)
=
\sum_{n=-\infty}^{\infty}
C_n
e^{iG_nx},
$$

where

* \(C_n\) are Fourier coefficients,
* \(G_n\) are the allowed spatial frequencies,
* \(i=\sqrt{-1}\).

Unlike ordinary frequencies measured in time, the quantities \(G_n\) measure oscillations in **space**.

For a crystal with period \(a\),

$$
G_n
=
\frac{2\pi n}{a},
$$

where

$$
n=0,\pm1,\pm2,\ldots
$$

The appearance of the factor \(2\pi\) follows naturally from the periodicity of complex exponential functions,

$$
e^{i(\theta+2\pi)}
=
e^{i\theta}.
$$

Thus, only specific spatial frequencies satisfy the translational symmetry of the crystal.

This discrete set of allowed wavevectors forms the simplest example of a reciprocal lattice.

---

# 5.1.3 The Periodic Potential of a Crystal

The Fourier viewpoint becomes especially important because the potential experienced by electrons inside a crystal is itself periodic.

If

$$
V(\mathbf r)
$$

represents the electrostatic potential,

then translational symmetry requires

$$
V(\mathbf r+\mathbf R)
=
V(\mathbf r),
$$

where

$$
\mathbf R
=
n_1\mathbf a_1
+
n_2\mathbf a_2
+
n_3\mathbf a_3
$$

is any lattice translation vector.

Since the potential repeats throughout space, it may be expanded as

$$
V(\mathbf r)
=
\sum_{\mathbf G}
V_{\mathbf G}
e^{i\mathbf G\cdot\mathbf r},
$$

where

* \(V_{\mathbf G}\) are Fourier coefficients,
* \(\mathbf G\) are reciprocal lattice vectors.

This equation is one of the most important connections between real space and reciprocal space.

Rather than describing the periodic potential atom by atom, it represents the entire crystal as a superposition of plane waves.

Later, Bloch's theorem will show that electrons naturally adopt wavefunctions compatible with this periodic Fourier structure.

---

# 5.1.4 From Real Space to Reciprocal Space

To understand reciprocal space physically, consider a simple one-dimensional crystal.

```text
Real-space lattice

●────●────●────●────●

Spacing = a
```

The corresponding reciprocal lattice has spacing

$$
\frac{2\pi}{a}.
$$

```text
Reciprocal lattice

●─●─●─●─●─●─●

Spacing = 2π/a
```

A striking feature immediately appears.

Large lattice spacing in real space corresponds to small spacing in reciprocal space.

Likewise,

small lattice spacing in real space corresponds to large reciprocal spacing.

The relationship is therefore inverse, explaining the term **reciprocal lattice**.

This inverse relationship reflects a general principle of Fourier analysis:

> **Structures that vary slowly in real space require only low spatial frequencies, whereas structures with fine detail require higher spatial frequencies.**

Thus, reciprocal space measures periodicity rather than physical distance.

---

# 5.1.5 Reciprocal Lattice Vectors

To extend these ideas to three dimensions, we introduce the **reciprocal lattice vectors**

$$
\mathbf b_1,\quad
\mathbf b_2,\quad
\mathbf b_3.
$$

These vectors form the basis of reciprocal space, just as

$$
\mathbf a_1,\;
\mathbf a_2,\;
\mathbf a_3
$$

form the basis of real space.

The reciprocal basis is defined through the orthogonality conditions

$$
\boxed{
\mathbf a_i\cdot\mathbf b_j
=
2\pi\delta_{ij},
}
$$

where

$$
\delta_{ij}
=
\begin{cases}
1,&i=j,\\
0,&i\neq j.
\end{cases}
$$

These equations are not arbitrary definitions. They ensure that the Fourier waves associated with reciprocal lattice vectors possess exactly the same periodicity as the crystal itself.

For example,

$$
e^{i\mathbf G\cdot(\mathbf r+\mathbf R)}
=
e^{i\mathbf G\cdot\mathbf r},
$$

provided that

$$
\mathbf G\cdot\mathbf R
=
2\pi m,
$$

where \(m\) is an integer.

This condition guarantees that translating the crystal by any lattice vector leaves the wave unchanged, exactly matching the translational symmetry of the crystal.

---

# 5.1.6 Constructing the Reciprocal Basis

The reciprocal basis vectors can be derived directly from the real-space lattice vectors.

For a general three-dimensional crystal,

$$
\boxed{
\mathbf b_1
=
2\pi
\frac{\mathbf a_2\times\mathbf a_3}
{\mathbf a_1\cdot(\mathbf a_2\times\mathbf a_3)}
}
$$

Similarly,

$$
\boxed{
\mathbf b_2
=
2\pi
\frac{\mathbf a_3\times\mathbf a_1}
{\mathbf a_1\cdot(\mathbf a_2\times\mathbf a_3)}
}
$$

and

$$
\boxed{
\mathbf b_3
=
2\pi
\frac{\mathbf a_1\times\mathbf a_2}
{\mathbf a_1\cdot(\mathbf a_2\times\mathbf a_3)}.
}
$$

These expressions deserve careful interpretation.

The denominator,

$$
\mathbf a_1\cdot
(\mathbf a_2\times\mathbf a_3),
$$

is the volume of the primitive unit cell,

$$
V
=
\mathbf a_1\cdot
(\mathbf a_2\times\mathbf a_3).
$$

The numerator,

$$
\mathbf a_2\times\mathbf a_3,
$$

produces a vector perpendicular to both \(\mathbf a_2\) and \(\mathbf a_3\), ensuring that

$$
\mathbf b_1
$$

is orthogonal to the corresponding lattice planes.

Thus, reciprocal vectors are fundamentally related to the orientation of crystal planes rather than atomic positions.

---

# 5.1.7 General Reciprocal Lattice Vectors

Once the reciprocal basis vectors are known, every reciprocal lattice point can be generated using integer combinations,

$$
\boxed{
\mathbf G
=
h\mathbf b_1
+
k\mathbf b_2
+
l\mathbf b_3,
}
$$

where

$$
h,k,l
$$

are integers.

Notice the similarity with the real-space lattice equation,

$$
\mathbf R
=
n_1\mathbf a_1
+
n_2\mathbf a_2
+
n_3\mathbf a_3.
$$

The two expressions are mathematically analogous.

The only difference is that

* \(\mathbf R\) describes positions in real space,
* \(\mathbf G\) describes periodicities in reciprocal space.

Every reciprocal lattice point therefore corresponds to a particular spatial frequency present in the crystal.

---

# 5.1.8 Physical Meaning of Reciprocal Vectors

The reciprocal lattice is often introduced mathematically, but its physical meaning is much deeper.

A reciprocal lattice vector represents the periodicity of a family of crystal planes.

For the plane family

$$
(hkl),
$$

the corresponding reciprocal vector is

$$
\mathbf G_{hkl}.
$$

Two important properties follow immediately:

* **Direction:** \(\mathbf G_{hkl}\) is perpendicular (normal) to the \((hkl)\) crystal planes.
* **Magnitude:** The length of \(\mathbf G_{hkl}\) is inversely proportional to the spacing between those planes.

Specifically,

$$
\boxed{
|\mathbf G_{hkl}|
=
\frac{2\pi}{d_{hkl}},
}
$$

where

* \(d_{hkl}\) is the interplanar spacing of the \((hkl)\) family.

This equation provides one of the most important links between real and reciprocal space.

It reveals that reciprocal vectors encode not only the orientation of crystal planes but also how closely those planes are spaced.

A simple illustration is

```text
Real Space

(111) planes

///////////

Spacing = d₁₁₁

↓

Reciprocal Space

        G₁₁₁
──────────────→

|G| = 2π/d₁₁₁
```

Closely spaced planes in real space produce long reciprocal vectors, whereas widely spaced planes produce short reciprocal vectors. This inverse relationship explains why reciprocal space is ideally suited for describing diffraction: scattering experiments measure wavevectors, which naturally correspond to reciprocal lattice vectors.

---

# 5.1.9 Reciprocal Space as the Natural Language of Waves

The transition from real space to reciprocal space represents a profound change in perspective. Real space describes **where atoms are located**, while reciprocal space describes **how periodic the crystal is**. Both contain the same information, but each emphasizes different aspects of the crystal.

For problems involving atomic geometry or bonding, the real-space picture is usually the most intuitive. However, whenever waves interact with a periodic crystal—whether they are X-rays, electrons, neutrons, lattice vibrations, or electron wavefunctions—the reciprocal-space description becomes significantly more natural.

This shift is not merely mathematical convenience. The reciprocal lattice embodies the translational symmetry of the crystal in a form directly compatible with wave physics. As a result, many fundamental phenomena that appear complex in real space reduce to simple geometric relationships in reciprocal space.

In the next chapter, this framework will be developed further by constructing the **reciprocal lattices of common crystal structures** and introducing **\(k\)-space**, where wavevectors describing electrons and other quasiparticles are represented. These ideas lead naturally to the concept of the **Brillouin zone**, which forms the foundation of modern electronic band theory and condensed matter physics.

# Chapter 5.2 — Reciprocal Lattices of Common Crystals, Physical Meaning, and *k*-Space

In the previous chapter, reciprocal space was introduced as the Fourier representation of a periodic crystal. Rather than describing the positions of atoms, reciprocal space describes the periodicities present within the lattice. The reciprocal lattice was shown to arise naturally from the translational symmetry of a crystal and provides the appropriate framework for analyzing waves in periodic media.

At this stage, however, the reciprocal lattice may still appear to be an abstract mathematical construction. Why should a lattice of vectors that does not physically exist be so central to solid-state physics? The answer lies in the behavior of waves. Every wave propagating through a crystal—whether an electron wave, an X-ray, a neutron, or a phonon—is characterized by a **wavevector**. These wavevectors are naturally represented in reciprocal space, where the periodicity of the crystal imposes simple geometric constraints on their behavior.

This chapter develops the reciprocal lattices corresponding to several common crystal structures and explains their physical interpretation. We then introduce **\(k\)-space**, the space of wavevectors that forms the foundation of modern electronic band theory.

---

# 5.2.1 Reciprocal Lattice as the Dual of the Crystal Lattice

The reciprocal lattice is often described as the **dual** of the real-space lattice. This terminology reflects the fact that every property of the reciprocal lattice is determined by the geometry of the real lattice.

If the primitive lattice vectors are

$$
\mathbf{a}_1,\;
\mathbf{a}_2,\;
\mathbf{a}_3,
$$

then the reciprocal basis vectors are

$$
\mathbf{b}_1,\;
\mathbf{b}_2,\;
\mathbf{b}_3,
$$

defined by

$$
\mathbf{a}_i \cdot \mathbf{b}_j
=
2\pi\delta_{ij}.
$$

Just as every lattice point in real space is generated from integer combinations of the primitive vectors,

$$
\mathbf{R}
=
n_1\mathbf{a}_1
+
n_2\mathbf{a}_2
+
n_3\mathbf{a}_3,
$$

every reciprocal lattice point is generated by

$$
\mathbf{G}
=
h\mathbf{b}_1
+
k\mathbf{b}_2
+
l\mathbf{b}_3,
$$

where \(h\), \(k\), and \(l\) are integers.

The correspondence between the two spaces is therefore remarkably symmetrical.

| Real Space                       | Reciprocal Space                    |
| -------------------------------- | ----------------------------------- |
| Atomic positions                 | Spatial periodicities               |
| Lattice vectors \(\mathbf{a}_i\) | Reciprocal vectors \(\mathbf{b}_i\) |
| Position vector \(\mathbf{R}\)   | Reciprocal vector \(\mathbf{G}\)    |
| Unit cell                        | Reciprocal unit cell                |
| Interatomic spacing              | Spatial frequency                   |

Although mathematically analogous, the physical interpretations of these quantities are fundamentally different.

---

# 5.2.2 Reciprocal Lattice of the Simple Cubic Crystal

The simplest example is the **simple cubic (SC)** lattice.

Its primitive vectors are

$$
\mathbf{a}_1=a\hat{x},
\qquad
\mathbf{a}_2=a\hat{y},
\qquad
\mathbf{a}_3=a\hat{z},
$$

where \(a\) is the lattice constant.

Substituting these vectors into the reciprocal lattice definitions yields

$$
\mathbf{b}_1
=
\frac{2\pi}{a}\hat{x},
$$

$$
\mathbf{b}_2
=
\frac{2\pi}{a}\hat{y},
$$

$$
\mathbf{b}_3
=
\frac{2\pi}{a}\hat{z}.
$$

Thus, the reciprocal lattice is also **simple cubic**.

The lattice constant of the reciprocal crystal is

$$
\boxed{
\frac{2\pi}{a}.
}
$$

This illustrates the inverse relationship between the two spaces:

* a larger real-space lattice constant produces a smaller reciprocal lattice,
* a smaller real-space lattice constant produces a larger reciprocal lattice.

---

# 5.2.3 Reciprocal Lattice of the Body-Centered Cubic Crystal

The **body-centered cubic (BCC)** lattice is one of the most important metallic crystal structures, adopted by materials such as iron (at room temperature), chromium, tungsten, and molybdenum.

Its primitive vectors are not aligned with the cube edges, making the reciprocal construction less obvious.

Performing the reciprocal lattice calculation reveals an elegant result:

$$
\boxed{
\text{BCC}
\longleftrightarrow
\text{FCC}
}
$$

In other words,

> **the reciprocal lattice of a body-centered cubic lattice is a face-centered cubic lattice.**

This relationship is one of the first examples demonstrating that reciprocal-space symmetry need not resemble real-space geometry.

---

# 5.2.4 Reciprocal Lattice of the Face-Centered Cubic Crystal

Similarly, the reciprocal lattice of an FCC crystal is

$$
\boxed{
\text{FCC}
\longleftrightarrow
\text{BCC}.
}
$$

This reciprocal relationship is particularly important because many technologically significant materials adopt FCC-based structures.

For example,

* copper,
* aluminum,
* silver,
* gold,

possess FCC Bravais lattices,

while

* silicon,
* germanium,
* diamond,

are based on an FCC lattice with a two-atom basis.

Consequently, the reciprocal space of silicon inherits many features associated with the reciprocal lattice of the FCC Bravais lattice, an important fact when constructing Brillouin zones and analyzing electronic band structures.

---

# 5.2.5 Reciprocal Lattice of the Hexagonal Crystal

Hexagonal crystals, including the wurtzite structure discussed previously, possess lattice vectors that differ substantially from those of cubic systems.

The real-space lattice is characterized by

* two equal in-plane vectors separated by \(120^\circ\),
* one perpendicular vector along the \(c\)-axis.

The reciprocal lattice also possesses hexagonal symmetry.

However,

* reciprocal vectors remain perpendicular to families of crystal planes,
* reciprocal lattice constants become inversely proportional to the real lattice constants.

Although the geometry becomes more complicated than the cubic case, the same construction principles remain valid.

---

# 5.2.6 Summary of Common Reciprocal Lattices

The reciprocal lattices of the most common Bravais lattices are summarized below.

| Real-Space Lattice        | Reciprocal Lattice        |
| ------------------------- | ------------------------- |
| Simple Cubic (SC)         | Simple Cubic (SC)         |
| Body-Centered Cubic (BCC) | Face-Centered Cubic (FCC) |
| Face-Centered Cubic (FCC) | Body-Centered Cubic (BCC) |
| Hexagonal                 | Hexagonal                 |

These relationships are fundamental throughout solid-state physics because many diffraction patterns and electronic structures are determined by reciprocal geometry rather than real-space geometry.

---

# 5.2.7 Reciprocal Lattice and Crystal Planes

One of the most profound aspects of the reciprocal lattice is its connection with **Miller indices**.

In Chapter 4, Miller indices were introduced as labels for families of crystal planes. At the time, they appeared to be a purely geometric notation.

Reciprocal space reveals their deeper significance.

For every family of planes

$$
(hkl),
$$

there exists a corresponding reciprocal lattice vector

$$
\mathbf{G}_{hkl}.
$$

This vector possesses two defining properties.

First,

$$
\mathbf{G}_{hkl}
$$

is normal (perpendicular) to the corresponding crystal planes.

Second,

its magnitude is

$$
\boxed{
|\mathbf{G}_{hkl}|
=
\frac{2\pi}{d_{hkl}},
}
$$

where

$$
d_{hkl}
$$

is the spacing between adjacent planes.

Thus,

Miller indices simultaneously identify

* the orientation of crystal planes in real space,
* the corresponding reciprocal lattice vectors in reciprocal space.

This dual interpretation is one of the reasons Miller indices remain central throughout crystallography and diffraction theory.

---

# 5.2.8 The Physical Meaning of Reciprocal Space

It is tempting to think of reciprocal space as an artificial mathematical tool. In reality, reciprocal space directly represents measurable physical quantities.

Consider an electron propagating through a crystal.

According to quantum mechanics, the electron behaves as a wave with wavelength

$$
\lambda.
$$

Its wavevector is

$$
\boxed{
\mathbf{k}
=
\frac{2\pi}{\lambda}.
}
$$

Notice the similarity between this expression and the reciprocal lattice vectors.

Both possess units of

$$
\text{length}^{-1}.
$$

This is not a coincidence.

Real space measures distances,

while reciprocal space measures

**spatial frequencies**.

Large wavelengths correspond to small wavevectors.

Short wavelengths correspond to large wavevectors.

Thus reciprocal space naturally describes all wave phenomena occurring inside crystals.

---

# 5.2.9 Waves and Crystal Periodicity

Suppose an electron wave moves through a periodic crystal.

```text id="vjlwm5"
Electron wave

~~~~~~~~~~~~~~

Crystal

●──●──●──●──●
```

If the wavelength bears no simple relationship to the crystal spacing,

the electron experiences only weak interference.

However, when the wavevector becomes compatible with the crystal periodicity,

strong constructive or destructive interference occurs.

Remarkably,

these interference conditions become simple geometric relationships between reciprocal lattice vectors.

Instead of tracking millions of individual atoms,

one analyzes only the geometry of reciprocal space.

This simplicity explains why diffraction, band theory, and phonon theory are all formulated primarily in reciprocal space.

---

# 5.2.10 Introducing *k*-Space

Although reciprocal lattice vectors describe the periodicity of the crystal, electrons are not restricted to reciprocal lattice points.

An electron wave may possess **any** wavevector,

$$
\mathbf{k},
$$

rather than only the discrete vectors

$$
\mathbf{G}.
$$

The collection of all possible wavevectors forms **\(k\)-space**.

```text id="b5gtuv"
Reciprocal lattice

•     •     •

    ×

•     •     •

        ×

•     •     •

• : Reciprocal lattice point

× : Electron wavevector
```

The distinction is important.

The reciprocal lattice consists of **discrete points** determined entirely by the crystal structure.

In contrast,

\(k\)-space is a continuous vector space containing every possible wavevector.

Electrons occupy points within this continuous space, while the reciprocal lattice provides the periodic framework within which these wavevectors are interpreted.

---

# 5.2.11 Why *k*-Space Matters

The wavevector

$$
\mathbf{k}
$$

plays a central role throughout solid-state physics.

Almost every property of electrons in crystals is expressed as a function of

$$
\mathbf{k}.
$$

Examples include

* electron energy,

$$
E(\mathbf{k}),
$$

* group velocity,

$$
\mathbf{v}
=
\frac{1}{\hbar}
\nabla_{\mathbf{k}}E,
$$

* effective mass,

which depends on the curvature of \(E(\mathbf{k})\),

* density of states,

which counts the number of allowed states in \(k\)-space,

* optical transitions,

which conserve crystal momentum represented by \(\mathbf{k}\).

Thus, while real space describes where electrons are likely to be found, \(k\)-space describes how they propagate through the periodic crystal.

---

# 5.2.12 Crystal Momentum

Although \(\mathbf{k}\) resembles the momentum of a free particle, electrons inside a crystal are not free. The periodic potential continually exchanges momentum with the electron through the lattice, so the ordinary momentum

$$
\mathbf{p}=m\mathbf{v}
$$

is generally **not** conserved.

Instead, the quantity that naturally characterizes an electron in a periodic crystal is the **crystal wavevector** \(\mathbf{k}\), from which we define the **crystal momentum**

$$
\boxed{
\mathbf{p}_{\text{crystal}}=\hbar\mathbf{k}.
}
$$

Crystal momentum has the same units as ordinary momentum and obeys many similar conservation laws during interactions within a crystal. However, it should not be interpreted as the mechanical momentum of the electron. Rather, it is a consequence of the translational symmetry of the lattice and reflects how the electron wave transforms under lattice translations. This distinction becomes essential when studying Bloch states and scattering processes.

---

# 5.2.13 Reciprocal Space as the Foundation of Wave Physics in Crystals

The reciprocal lattice provides far more than an alternative coordinate system. It is the natural framework for describing every wave phenomenon in a periodic solid. Real-space geometry determines the reciprocal lattice, while reciprocal-space geometry governs the behavior of electron waves, X-rays, neutrons, and phonons.

This dual description unifies crystallography and quantum mechanics. Miller indices become reciprocal lattice vectors, crystal planes become wave-scattering centers, and electron propagation is described through wavevectors in \(k\)-space. Many quantities that appear complex in real space—such as interference, diffraction conditions, and electronic dispersion—take on a simple geometric interpretation when viewed in reciprocal space.

The next chapter introduces one of the most important geometric constructions in reciprocal space: the **Brillouin zone**. Built from the reciprocal lattice, the Brillouin zone defines the fundamental region of \(k\)-space and provides the framework for understanding Bloch waves, electronic energy bands, phonon dispersion, and nearly every aspect of modern condensed matter physics.

