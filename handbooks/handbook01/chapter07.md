# Chapter 7.1 — Wave Scattering, Bragg's Law, and Laue Diffraction

One of the most remarkable consequences of the periodic arrangement of atoms in a crystal is that it can be **observed directly** through its interaction with waves. While atoms themselves are far too small to be seen with ordinary optical microscopes, their regular arrangement leaves a distinct signature when illuminated by waves whose wavelengths are comparable to interatomic distances.

This idea transformed solid-state physics in the early twentieth century. Before the discovery of diffraction, the existence of periodic crystal structures was largely inferred from macroscopic observations such as crystal shapes and cleavage planes. The demonstration that X-rays produce diffraction patterns when passing through crystals provided direct experimental evidence that atoms are arranged periodically. More importantly, it established diffraction as one of the most powerful experimental techniques for determining crystal structure.

Diffraction is fundamentally a **wave interference phenomenon**. When an incident wave interacts with a crystal, every atom acts as a secondary source of scattered waves. These scattered waves interfere with one another. Depending on their relative phases, they may reinforce each other through **constructive interference** or cancel through **destructive interference**. The regular periodicity of a crystal ensures that constructive interference occurs only in specific directions, producing sharp diffraction peaks that encode information about the crystal structure.

In the previous chapters, reciprocal space and the Brillouin zone were introduced as the natural language for describing periodic crystals. In this chapter, we return temporarily to real space to develop the intuitive picture of diffraction through Bragg's law before introducing the more general Laue formulation. Later, the reciprocal-space interpretation will reveal that these seemingly different descriptions are in fact mathematically equivalent.

---

# 7.1.1 Waves as Probes of Crystal Structure

A wave interacting with matter is characterized by its wavelength,

$$
\lambda,
$$

and wavevector,

$$
\mathbf{k}
=
\frac{2\pi}{\lambda}.
$$

To resolve a structure of characteristic size \(d\), the wavelength of the probing wave must be comparable to that dimension.

Visible light has wavelengths between approximately

$$
400\text{–}700\ \text{nm},
$$

whereas typical atomic spacings in crystals are

$$
0.2\text{–}0.4\ \text{nm}.
$$

Since visible light has wavelengths nearly one thousand times larger than atomic separations, it cannot resolve individual atoms. Instead, the crystal appears as a uniform medium.

X-rays, however, possess wavelengths of approximately

$$
0.05\text{–}0.25\ \text{nm},
$$

making them ideally suited for probing atomic arrangements. Electrons accelerated to appropriate energies and thermal neutrons have comparable de Broglie wavelengths and can also produce diffraction.

This simple comparison illustrates a fundamental principle:

> **The ability of a wave to reveal structural detail depends on the relationship between its wavelength and the characteristic spacing of the structure.**

---

# 7.1.2 Scattering from a Single Atom

Consider first an isolated atom illuminated by an incident electromagnetic wave.

```text
Incident Wave

~~~~~~~~~~~~~~→

        ○

      ↗ ↑ ↖
     ↗  |  ↖
    ↗   |   ↖

Scattered Waves
```

The oscillating electric field of the incident wave causes the electrons within the atom to oscillate. These accelerated charges then emit secondary electromagnetic waves in many directions.

The atom therefore behaves as a **secondary source of radiation**.

The scattered wave has the same frequency as the incident wave (for elastic scattering) but travels in a different direction.

A single atom therefore scatters waves continuously in space.

However, little structural information can be extracted from a single scattering center.

The true power of diffraction emerges only when many atoms scatter coherently.

---

# 7.1.3 Scattering from Multiple Atoms

Now consider two atoms separated by a distance \(d\).

```text
Incident Wave

~~~~~~~~~~~~~~→

○          ○

 ↘        ↙
  ↘      ↙
   Detector
```

Each atom emits a scattered wave.

The waves arriving at the detector combine according to the principle of superposition.

If the two waves arrive in phase,

their amplitudes add,

producing **constructive interference**.

If they arrive exactly out of phase,

their amplitudes cancel,

producing **destructive interference**.

Thus,

the observed intensity depends not only on the scattering strength of individual atoms but also on the **relative phase** of the scattered waves.

This phase difference depends on

* atomic spacing,
* wavelength,
* scattering direction.

---

# 7.1.4 Scattering from a Crystal

A crystal contains approximately

$$
10^{23}
$$

atoms arranged periodically.

Each atom scatters the incident wave.

Fortunately, because the atoms occupy highly ordered positions, the scattered waves possess well-defined phase relationships.

```text
Incident Wave

~~~~~~~~~~~~~~→

○   ○   ○   ○

○   ○   ○   ○

○   ○   ○   ○

↓

Scattered Waves

Specific directions only
```

Most scattering directions experience destructive interference.

Only certain directions satisfy the conditions for constructive interference.

As a result,

the scattered intensity is concentrated into sharp diffraction peaks rather than being distributed uniformly.

The positions of these peaks reveal the periodicity of the crystal.

---

# 7.1.5 Interference and Path Difference

To understand diffraction quantitatively, consider waves scattered from two adjacent crystal planes separated by a distance

$$
d.
$$

Suppose the incident wave strikes the planes at an angle

$$
\theta.
$$

```text
                 Reflected Wave

              ↗

───────────────

       θ

───────────────

              ↘

         Incident Wave
```

The wave reflected from the lower plane travels a slightly longer distance than the wave reflected from the upper plane.

This additional distance is called the **path difference**.

Simple geometry shows that

$$
\boxed{
\text{Path Difference}
=
2d\sin\theta.
}
$$

The path difference determines whether the reflected waves interfere constructively or destructively.

---

# 7.1.6 Constructive Interference

Constructive interference occurs whenever the path difference equals an integer multiple of the wavelength.

Thus,

$$
2d\sin\theta
=
n\lambda,
$$

where

* \(n=1,2,3,\ldots\)

is the diffraction order.

This simple relationship is one of the most celebrated equations in crystallography.

---

# 7.1.7 Bragg's Law

The condition

$$
\boxed{
2d\sin\theta
=
n\lambda
}
$$

is known as **Bragg's Law**, named after William Henry Bragg and William Lawrence Bragg, whose work laid the foundation of modern X-ray crystallography.

Each symbol has a clear physical meaning.

* \(d\) is the spacing between adjacent crystal planes.
* \(\theta\) is the angle between the incident beam and the crystal plane.
* \(\lambda\) is the wavelength of the incident wave.
* \(n\) is the diffraction order.

Bragg's law does not describe ordinary reflection from a surface. Instead, it expresses the condition under which waves reflected from **many parallel atomic planes** interfere constructively.

Whenever this condition is satisfied,

the scattered intensity reaches a maximum,

producing a diffraction peak.

If the condition is not satisfied,

the reflected waves largely cancel one another,

and little scattered intensity is observed.

---

# 7.1.8 Physical Interpretation of Bragg's Law

Bragg's law provides much more than a convenient mathematical formula.

It reveals a direct relationship between

* the wavelength of the probing wave,
* the spacing between crystal planes,
* the observed diffraction angles.

Consequently,

if the wavelength is known,

the interplanar spacing can be determined experimentally by measuring the diffraction angle.

Conversely,

if the crystal structure is already known,

Bragg's law predicts the diffraction pattern expected for a given wavelength.

This reciprocal relationship makes diffraction one of the most powerful tools for determining crystal structures.

---

# 7.1.9 Bragg Diffraction as Reflection

Bragg's treatment presents diffraction as though waves are reflected from successive crystal planes.

This picture is highly intuitive and extremely useful.

However,

it should not be interpreted literally.

Atoms are not arranged as perfectly reflecting mirrors.

Instead,

every atom scatters the incident wave independently.

The appearance of reflection emerges only because the scattered waves from many atomic planes interfere constructively in specific directions.

Thus,

Bragg reflection is best understood as an interference phenomenon rather than an optical reflection.

---

# 7.1.10 Limitations of the Bragg Picture

Although Bragg's model successfully predicts diffraction angles,

it possesses several limitations.

The model

* treats diffraction as reflection from planes,
* emphasizes only one family of crystal planes at a time,
* does not explicitly describe three-dimensional scattering,
* provides little insight into reciprocal space.

These limitations motivated the development of a more general description by Max von Laue.

---

# 7.1.11 The Laue Picture of Diffraction

Instead of viewing diffraction as reflection from crystal planes,

Laue considered the crystal as a complete three-dimensional periodic array of scattering centers.

An incident wave with wavevector

$$
\mathbf{k}_i
$$

is scattered into

$$
\mathbf{k}_f.
$$

```text
          kf

        ↗

      ○

→ ki
```

The change in wavevector is

$$
\boxed{
\Delta\mathbf{k}
=
\mathbf{k}_f
-
\mathbf{k}_i.
}
$$

Constructive interference occurs only when this scattering vector equals a reciprocal lattice vector,

$$
\boxed{
\Delta\mathbf{k}
=
\mathbf{G}.
}
$$

This elegant vector equation is called the **Laue condition**.

Unlike Bragg's law,

which is expressed in terms of crystal planes,

the Laue condition is formulated entirely in reciprocal space.

---

# 7.1.12 Relationship Between Bragg and Laue Diffraction

At first sight,

Bragg's law and the Laue equations appear unrelated.

One describes reflections from crystal planes,

while the other describes wavevector conservation in reciprocal space.

In fact,

they are mathematically equivalent.

Bragg's law is simply the geometric consequence of the Laue condition for diffraction from a family of parallel crystal planes.

The two descriptions therefore represent different viewpoints of the same physical phenomenon.

| Bragg Picture                  | Laue Picture                                   |
| ------------------------------ | ---------------------------------------------- |
| Reflection from crystal planes | Scattering from periodic lattice               |
| Real-space interpretation      | Reciprocal-space interpretation                |
| Uses interplanar spacing \(d\) | Uses reciprocal lattice vectors \(\mathbf{G}\) |
| Simple geometric construction  | General vector formulation                     |

Bragg's approach is often preferred for introducing diffraction because of its intuitive geometric interpretation, while the Laue formulation becomes indispensable for analyzing complex crystal structures and modern diffraction experiments.

---

# 7.1.13 Diffraction as Evidence of Crystal Periodicity

Diffraction provides one of the clearest demonstrations that crystals possess long-range periodic order. The existence of sharp diffraction peaks is itself evidence that atoms are arranged in a highly regular lattice. If the atoms were distributed randomly, as in an amorphous material, the coherent interference responsible for these peaks would be lost, producing broad diffuse scattering instead.

More importantly, diffraction establishes a direct connection between crystal geometry and wave physics. The spacing and orientation of atomic planes determine the interference conditions described by Bragg's law, while the reciprocal lattice provides the corresponding wavevector description through the Laue condition. These complementary perspectives reveal that the periodic arrangement of atoms controls how waves propagate through crystalline matter.

In the next chapter, the discussion moves beyond the conditions for diffraction to examine how the **intensity** of diffracted beams is determined. By introducing the **structure factor**, we will see that diffraction depends not only on the geometry of the lattice but also on the arrangement of atoms within the unit cell. This distinction allows diffraction experiments to distinguish between different crystal structures that share the same Bravais lattice and forms the basis of modern crystallographic analysis.

# Chapter 7.2 — Structure Factor, X-Ray Diffraction, Electron Diffraction, and Neutron Diffraction

In the previous chapter, diffraction was introduced as the interference of waves scattered by the periodic arrangement of atoms in a crystal. Bragg's law established the geometric condition under which constructive interference occurs, while the Laue formulation showed that diffraction can be understood more generally as scattering involving reciprocal lattice vectors.

However, satisfying the Bragg condition alone does **not** guarantee that a diffraction peak will actually be observed.

Consider two crystals that possess exactly the same Bravais lattice but different atomic bases. Since the lattice periodicity is identical, Bragg's law predicts diffraction at the same angles for both crystals. Yet experimentally, their diffraction patterns are often quite different. Some reflections become stronger, others weaker, and some disappear entirely.

This observation reveals an important fact:

> **The positions of diffraction peaks are determined by the lattice, but their intensities are determined by the arrangement of atoms within the unit cell.**

To understand diffraction completely, it is therefore necessary to consider not only the periodicity of the crystal but also how individual atoms scatter waves and how these scattered waves combine. This leads naturally to the concept of the **structure factor**, one of the most important quantities in crystallography.

After introducing the structure factor, this chapter examines the three principal diffraction techniques used in materials science—X-ray diffraction, electron diffraction, and neutron diffraction. Although each technique relies on the same underlying interference principles, the different probes interact with matter in fundamentally different ways, making them complementary tools for investigating crystal structures.

---

# 7.2.1 Scattering from the Unit Cell

A crystal can be viewed as an infinite repetition of identical unit cells.

```text id="m8v2gf"
□ □ □ □ □

□ □ □ □ □

□ □ □ □ □
```

Since every unit cell is identical, understanding diffraction from a single unit cell allows us to understand diffraction from the entire crystal.

Suppose a unit cell contains \(N\) atoms.

Each atom scatters the incident wave.

Because the atoms occupy different positions,

their scattered waves generally possess different phases.

```text id="tztt7l"
Unit Cell

○

     ○

  ○

      ○
```

The total scattered wave is therefore the **sum of the contributions from all atoms**.

Whether these waves reinforce or cancel one another depends on their relative phases.

---

# 7.2.2 Phase Difference Inside the Unit Cell

Consider an atom located at position

$$
\mathbf{r}_j
$$

within the unit cell.

When an incident wave is scattered by this atom,

its phase differs from that of an atom located at the origin.

The phase difference is

$$
\boxed{
e^{\,i\mathbf{G}\cdot\mathbf{r}_j},
}
$$

where

* \(\mathbf{G}\) is the reciprocal lattice vector associated with the diffraction condition,
* \(\mathbf{r}_j\) is the atomic position inside the unit cell.

Thus,

each atom contributes not only according to how strongly it scatters but also according to its position within the unit cell.

The observed diffraction pattern therefore contains detailed information about the internal atomic arrangement.

---

# 7.2.3 Atomic Scattering Factor

Different atoms do not scatter incident waves equally.

For X-rays, heavier atoms generally scatter more strongly because they contain more electrons.

This scattering strength is represented by the **atomic scattering factor**

$$
f_j.
$$

The quantity \(f_j\) depends on

* atomic number,
* electron distribution,
* scattering angle,
* wavelength.

For the present discussion,

it is sufficient to regard \(f_j\) as the amplitude scattered by the \(j^{\text{th}}\) atom.

---

# 7.2.4 Structure Factor

Combining the contributions from all atoms within the unit cell yields the **structure factor**

$$
\boxed{
F_{hkl}
=
\sum_{j=1}^{N}
f_j
e^{\,i\mathbf{G}\cdot\mathbf{r}_j}.
}
$$

This equation is one of the central results of crystallography.

Each term represents

* the scattering strength of one atom,
* multiplied by its phase relative to the origin.

The summation accounts for interference among all atoms inside the unit cell.

Unlike Bragg's law,

which determines *where* diffraction occurs,

the structure factor determines *how strongly* each diffraction peak appears.

---

# 7.2.5 Diffraction Intensity

The experimentally measured diffraction intensity is proportional to the square of the scattered wave amplitude.

Thus,

$$
\boxed{
I_{hkl}
\propto
|F_{hkl}|^2.
}
$$

This simple equation explains many diffraction observations.

If

$$
F_{hkl}=0,
$$

then

$$
I_{hkl}=0.
$$

Although Bragg's law predicts that diffraction is geometrically possible,

the scattered waves cancel perfectly,

and no diffraction peak appears.

Such reflections are called **systematic absences** or **extinctions**.

These missing reflections provide valuable information about crystal symmetry.

---

# 7.2.6 Example: Structure Factor of a Simple Cubic Crystal

Consider the simplest possible crystal,

containing one atom located at

$$
(0,0,0).
$$

The structure factor becomes

$$
F_{hkl}
=
f.
$$

Since only one atom contributes,

every allowed Bragg reflection is present.

The diffraction pattern therefore depends only on the lattice geometry.

---

# 7.2.7 Example: Diamond Structure

The importance of the structure factor becomes much clearer for the diamond crystal structure.

The diamond lattice consists of an FCC Bravais lattice with a two-atom basis.

The second atom introduces an additional phase shift,

causing some reflections to interfere constructively and others destructively.

Consequently,

certain diffraction peaks predicted by the FCC lattice disappear entirely.

These systematic absences provide direct experimental evidence for the internal arrangement of atoms within the unit cell.

Thus,

the structure factor allows diffraction experiments to distinguish between

* simple cubic,
* body-centered cubic,
* face-centered cubic,
* diamond,
* zinc blende,

even when their lattice constants are similar.

---

# 7.2.8 X-Ray Diffraction (XRD)

Among all diffraction techniques,

**X-ray diffraction (XRD)** is the most widely used method for determining crystal structures.

X-rays interact primarily with the **electron clouds** surrounding atoms.

When an incident X-ray beam strikes a crystal,

the oscillating electric field causes electrons to oscillate,

producing scattered electromagnetic waves.

Constructive interference among these scattered waves produces the diffraction pattern.

```text id="ow1ljg"
X-ray Beam

~~~~~~~~~~~~→

Crystal

□□□□□□□□□□

↓

Diffracted Beams
```

Because X-ray wavelengths are comparable to atomic spacings,

Bragg diffraction occurs naturally.

---

## Information Obtained from XRD

X-ray diffraction can determine

* lattice constants,
* crystal structure,
* phase identification,
* crystal orientation,
* crystallite size,
* residual strain,
* degree of crystallinity.

Consequently,

XRD has become one of the most important characterization techniques in materials science.

---

# 7.2.9 X-Ray Diffraction Patterns

An XRD experiment measures scattered intensity as a function of diffraction angle.

```text id="muafbe"
Intensity

│
│         ▲
│     ▲
│           ▲
│  ▲
│_____________________

      2θ
```

Each peak corresponds to diffraction from a particular family of crystal planes.

The peak positions determine

$$
d_{hkl},
$$

while the peak intensities depend upon the structure factor.

Thus,

both geometric and chemical information are encoded in a single diffraction pattern.

---

# 7.2.10 Electron Diffraction

Electrons also exhibit wave behavior according to the de Broglie hypothesis.

For an electron,

$$
\boxed{
\lambda
=
\frac{h}{p},
}
$$

where

* \(h\) is Planck's constant,
* \(p\) is the electron momentum.

Accelerated electrons possess wavelengths comparable to interatomic spacings,

making electron diffraction possible.

Unlike X-rays,

electrons interact through the **electrostatic potential** of the atoms rather than primarily with their electron clouds.

Because electrons interact much more strongly with matter,

electron diffraction offers several advantages.

It provides

* very high scattering intensity,
* excellent sensitivity to thin specimens,
* high spatial resolution.

However,

the strong interaction also limits penetration depth,

requiring very thin samples.

Electron diffraction therefore plays a central role in transmission electron microscopy (TEM).

---

# 7.2.11 Electron Diffraction Patterns

Instead of isolated peaks,

electron diffraction often produces spot patterns or rings.

Single crystals generate

```text id="v80n1o"
      •

  •       •

      ○

  •       •

      •
```

Polycrystalline materials produce concentric diffraction rings because numerous randomly oriented crystallites satisfy the diffraction condition simultaneously.

These patterns reveal

* crystal orientation,
* lattice spacing,
* crystal quality,
* defects,
* phase composition.

---

# 7.2.12 Neutron Diffraction

Neutrons provide a third important diffraction probe.

Unlike X-rays,

which interact with electrons,

or electrons,

which interact through electric fields,

neutrons interact primarily through the **atomic nucleus**.

Since neutrons possess no electric charge,

they penetrate deeply into materials.

Moreover,

because neutrons themselves possess magnetic moments,

they also interact with magnetic ordering.

Consequently,

neutron diffraction provides unique information unavailable through X-rays or electrons.

---

## Information Obtained from Neutron Diffraction

Neutron diffraction is particularly valuable for studying

* light atoms such as hydrogen,
* magnetic structures,
* isotope distributions,
* crystal structures in bulk materials,
* lattice dynamics.

For magnetic materials,

the neutron becomes one of the few probes capable of directly determining spin arrangements within a crystal.

---

# 7.2.13 Comparison of Diffraction Techniques

Although all diffraction methods rely on the same interference principles, they differ significantly in the way they interact with matter and in the information they provide.

| Property                       | X-Rays                                    | Electrons                                    | Neutrons                                              |
| ------------------------------ | ----------------------------------------- | -------------------------------------------- | ----------------------------------------------------- |
| Primary interaction            | Electron cloud                            | Electrostatic potential of atoms             | Atomic nuclei and magnetic moments                    |
| Penetration depth              | Moderate                                  | Low                                          | High                                                  |
| Sample thickness               | Bulk or thin films                        | Very thin specimens                          | Bulk materials                                        |
| Sensitive to light elements    | Limited                                   | Moderate                                     | Excellent                                             |
| Sensitive to magnetic ordering | No                                        | Limited                                      | Yes                                                   |
| Common applications            | Crystal structure, phase analysis, strain | Local crystal structure, defects, interfaces | Magnetic structure, light atoms, bulk crystallography |

These techniques are therefore complementary rather than competing. In modern materials research, it is common to combine two or more of them to obtain a more complete understanding of a material's structure and properties.

---

# 7.2.14 Diffraction as a Bridge Between Structure and Electronic Properties

The theory of diffraction developed in this chapter completes the connection between the geometry of crystals and their experimental characterization. Bragg's law identifies the geometric conditions under which constructive interference occurs, while the structure factor explains how the arrangement of atoms within the unit cell determines the intensity of each diffracted beam. Together, they enable diffraction experiments to reveal both the lattice and the atomic basis of a crystal.

More broadly, diffraction demonstrates the deep relationship between real space and reciprocal space. The periodic arrangement of atoms in real space gives rise to discrete reciprocal lattice vectors, and these vectors govern the scattering of waves through the Laue condition. In this sense, diffraction provides direct experimental access to the reciprocal lattice introduced in the previous chapters.

Having established how crystal periodicity can be measured experimentally, the handbook now turns to the quantum behavior of electrons themselves. The next part begins with the **free electron models**, where electrons are first treated as nearly free particles before progressively incorporating the influence of the periodic crystal potential. This progression will ultimately lead to Bloch's theorem, electronic band formation, and the modern understanding of solids.

