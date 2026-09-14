# Chapter 3.1 — Crystal Lattices, Unit Cells, and Crystal Systems

The previous chapter explained why atoms bond together to lower their total energy. However, chemical bonding alone does not determine the structure of a solid. Once atoms become bonded, a second fundamental question naturally arises:

> **How do billions upon billions of atoms arrange themselves to form a solid?**

The answer is far from arbitrary. Rather than occupying random positions, atoms in many solids organize into highly ordered, periodically repeating arrangements known as **crystals**. This long-range periodicity is one of the defining characteristics of crystalline solids and lies at the heart of solid-state physics.

The periodic arrangement of atoms is much more than a geometric curiosity. It fundamentally alters the behavior of electrons, phonons, and electromagnetic waves. The existence of electronic energy bands, reciprocal lattices, Brillouin zones, diffraction, and Bloch's theorem—all central topics in later chapters—can ultimately be traced back to the periodic nature of crystalline matter.

This chapter develops the mathematical language used to describe crystal structures. We begin by introducing the concept of a crystal lattice, distinguish it from the physical arrangement of atoms, and then develop the ideas of unit cells, crystal systems, and the fourteen Bravais lattices that provide the geometric framework for virtually all crystalline solids.

---

# 3.1.1 Order in Solids

Not all solids possess the same degree of atomic order. Depending on how atoms are arranged, solids may be broadly classified into three categories.

| Type of Solid   | Atomic Arrangement  | Long-Range Order      |
| --------------- | ------------------- | --------------------- |
| Crystalline     | Periodic            | Present               |
| Polycrystalline | Many small crystals | Present within grains |
| Amorphous       | Random              | Absent                |

In a **crystalline solid**, atoms occupy positions that repeat periodically throughout the entire material. If one observes the atomic arrangement over sufficiently large distances, the same geometric pattern appears repeatedly.

```text
Crystalline Solid

● ● ● ● ●
 ● ● ● ● ●
● ● ● ● ●
 ● ● ● ● ●
● ● ● ● ●
```

In contrast, an **amorphous solid** lacks this long-range periodicity.

```text
Amorphous Solid

●     ●    ●

    ●      ●

 ●        ●

      ●

  ●        ●
```

Although neighboring atoms may still possess some local order, there is no repeating pattern extending across the material.

Examples include

* crystalline silicon,
* diamond,
* sodium chloride,
* copper,

whereas

* ordinary window glass,
* many polymers,
* amorphous silicon,

lack long-range crystalline order.

The distinction is crucial because many theoretical tools developed in solid-state physics—including reciprocal space and band theory—require the existence of periodicity.

---

# 3.1.2 Translational Symmetry

The defining property of a crystal is **translational symmetry**.

Imagine selecting one atom within a crystal. If the entire crystal is translated by certain specific distances, the atomic arrangement appears completely unchanged.

Mathematically,

```text
Original

● ● ● ● ●

Translation →

● ● ● ● ●
```

The translated structure is physically indistinguishable from the original.

This property may seem almost trivial, yet it has profound consequences. Translational symmetry allows us to describe an enormous crystal containing approximately

$$
10^{23}
$$

atoms using only a tiny repeating building block.

Nearly every mathematical treatment developed later in this handbook depends upon this remarkable simplification.

---

# 3.1.3 Crystal Lattice

To describe periodicity mathematically, we introduce the concept of a **crystal lattice**.

A crystal lattice is **an infinite periodic array of points**, each point representing an equivalent position within the crystal.

It is important to emphasize that a lattice is **not the crystal itself**.

A lattice contains **points**, not atoms.

These lattice points merely specify where identical structural units are repeated.

A simple two-dimensional square lattice is illustrated below.

```text
●───●───●───●

│   │   │   │

●───●───●───●

│   │   │   │

●───●───●───●
```

Every lattice point has exactly the same environment as every other lattice point.

This equivalence is the defining feature of a lattice.

---

## Lattice Vectors

The periodicity of a crystal is described by **primitive translation vectors**.

In three dimensions, these vectors are denoted by

$$
\mathbf a_1,\quad
\mathbf a_2,\quad
\mathbf a_3.
$$

Every lattice point may then be generated through

$$
\boxed{
\mathbf R
=
n_1\mathbf a_1
+
n_2\mathbf a_2
+
n_3\mathbf a_3
}
$$

where

* \(n_1,n_2,n_3\) are integers,
* \(\mathbf R\) locates any lattice point.

This deceptively simple equation is one of the most important expressions in crystallography. It states that every point in an infinite crystal can be generated by integer combinations of only three vectors.

The periodicity of the crystal is therefore encoded entirely within the translation vectors.

---

# 3.1.4 Lattice Versus Crystal Structure

A common misconception is to treat a lattice and a crystal structure as synonymous. In reality, they describe different concepts.

A **lattice** specifies only the periodic geometry of equivalent points. It contains no information about the identity or arrangement of atoms.

A **crystal structure** is obtained by attaching a specific group of atoms, called a **basis**, to every lattice point.

This relationship may be expressed succinctly as

$$
\boxed{
\text{Crystal Structure}
=
\text{Lattice}
+
\text{Basis}
}
$$

The basis may consist of

* a single atom,
* multiple atoms,
* a molecule,
* or even a more complex structural unit.

For example,

```text
Lattice

●   ●   ●

●   ●   ●


Basis

○


Crystal

○   ○   ○

○   ○   ○
```

If the basis contains two atoms,

```text
Lattice

●      ●      ●


Basis

○●


Crystal

○●   ○●   ○●
```

Although the lattice remains unchanged, the resulting crystal structure is completely different.

This distinction becomes increasingly important when studying semiconductors such as silicon and gallium arsenide. Both possess closely related underlying lattices but differ in the atomic basis attached to each lattice point.

---

# 3.1.5 Unit Cells

Since a crystal extends indefinitely, describing every atom individually is impossible. Fortunately, translational symmetry allows us to describe the entire crystal using a small repeating volume called the **unit cell**.

A unit cell is the smallest volume that, when translated by the lattice vectors, reproduces the entire crystal.

```text
┌──────┐
│      │
│ Cell │
│      │
└──────┘

↓

Repeated

┌──┬──┬──┐
│  │  │  │
├──┼──┼──┤
│  │  │  │
├──┼──┼──┤
│  │  │  │
└──┴──┴──┘
```

One may think of the unit cell as the "tile" from which the infinite crystal is constructed.

Every physical property of an ideal crystal is completely determined by

* the geometry of the unit cell,
* the lattice vectors,
* the atomic basis inside the cell.

This remarkable simplification enables physicists to study crystals containing trillions of atoms by analyzing only a tiny repeating region.

---

## Primitive Unit Cell

The **primitive unit cell** contains exactly one lattice point.

It represents the smallest possible repeating unit of the lattice.

Its volume is

$$
V_p
=
\mathbf a_1
\cdot
(\mathbf a_2
\times
\mathbf a_3).
$$

Although primitive cells possess the smallest possible volume, they are not always the most geometrically intuitive.

---

## Conventional Unit Cell

For many crystals, a larger **conventional unit cell** is preferred.

Although it may contain multiple lattice points, it better illustrates

* crystal symmetry,
* lattice directions,
* geometric relationships.

Throughout crystallography, conventional cells are widely used because they make the symmetry of the crystal immediately apparent.

---

# 3.1.6 Lattice Parameters

The geometry of a unit cell is completely specified by six lattice parameters.

The edge lengths are

$$
a,\quad b,\quad c,
$$

while the angles between them are

$$
\alpha,\quad
\beta,\quad
\gamma.
$$

These quantities define the size and shape of the repeating unit.

```text
          c
         /
        /
       ●
      /|
     / |
    /  |
   ●---●
  / γ
 /
●────────

a          b
```

Changing these parameters changes the geometry of the crystal.

Different combinations of these lengths and angles produce the seven crystal systems discussed next.

---

# 3.1.7 Crystal Systems

Although infinitely many lattice geometries appear possible, symmetry imposes strong restrictions.

Remarkably, every three-dimensional crystal belongs to one of only **seven crystal systems**.

These systems are distinguished by relationships among the lattice parameters.

| Crystal System          | Edge Lengths      | Angles                              |
| ----------------------- | ----------------- | ----------------------------------- |
| Cubic                   | \(a=b=c\)         | \(\alpha=\beta=\gamma=90^\circ\)    |
| Tetragonal              | \(a=b\neq c\)     | \(90^\circ\)                        |
| Orthorhombic            | \(a\neq b\neq c\) | \(90^\circ\)                        |
| Hexagonal               | \(a=b\neq c\)     | \(\gamma=120^\circ\)                |
| Trigonal (Rhombohedral) | \(a=b=c\)         | \(\alpha=\beta=\gamma\neq90^\circ\) |
| Monoclinic              | \(a\neq b\neq c\) | One angle differs from \(90^\circ\) |
| Triclinic               | \(a\neq b\neq c\) | All angles different                |

These crystal systems provide the broad geometric classification of crystalline matter.

Many technologically important materials belong to these systems:

* Silicon and diamond are based on the cubic system.
* Gallium nitride commonly crystallizes in the hexagonal system.
* Quartz belongs to the trigonal system.
* Numerous ceramic materials adopt orthorhombic or monoclinic structures.

The crystal system specifies the overall geometry, but not the exact arrangement of lattice points. That additional information is provided by the Bravais lattices.

---

# 3.1.8 The Fourteen Bravais Lattices

In 1848, the French physicist Auguste Bravais demonstrated that only **fourteen distinct three-dimensional lattices** satisfy the requirements of translational symmetry.

These **Bravais lattices** represent every possible periodic arrangement of equivalent lattice points in three-dimensional Euclidean space.

The fourteen lattices arise from combining the seven crystal systems with different lattice centerings.

The possible centerings are:

* **Primitive (P):** lattice points only at the corners.
* **Body-centered (I):** one additional lattice point at the center of the cell.
* **Face-centered (F):** additional lattice points at the centers of all faces.
* **Base-centered (C or A/B):** additional lattice points on one pair of opposite faces.

Not every centering is compatible with every crystal system. After accounting for symmetry redundancies, exactly fourteen unique Bravais lattices remain.

| Crystal System          | Allowed Bravais Lattices |
| ----------------------- | ------------------------ |
| Cubic                   | P, I, F                  |
| Tetragonal              | P, I                     |
| Orthorhombic            | P, C, I, F               |
| Monoclinic              | P, C                     |
| Triclinic               | P                        |
| Hexagonal               | P                        |
| Trigonal (Rhombohedral) | R                        |

These fourteen lattices form the geometric foundation of crystallography. Every ideal crystalline material can be described by selecting one of these Bravais lattices and associating an appropriate atomic basis with each lattice point.

---

# 3.1.9 Why Crystal Lattices Matter in Solid-State Physics

At first glance, crystal lattices may appear to be merely a convenient geometric language. In reality, they play a far deeper role by defining the periodic environment experienced by electrons and atomic vibrations.

The translational symmetry of the lattice leads directly to several of the central concepts of solid-state physics:

* The periodic potential experienced by electrons, which gives rise to **Bloch's theorem**.
* The reciprocal lattice and **Brillouin zones**, which provide the natural description of wave propagation in crystals.
* **Diffraction**, where X-rays, electrons, and neutrons scatter from the periodic arrangement of atoms.
* **Electronic band formation**, resulting from the interaction of electrons with the periodic crystal potential.
* **Phonons**, the quantized lattice vibrations whose allowed modes are determined by crystal periodicity.

Thus, the lattice is much more than a geometric abstraction. It is the mathematical expression of the periodic order that distinguishes crystalline solids from all other forms of matter. Every major theoretical framework developed in the subsequent chapters—from reciprocal space and diffraction to electronic band theory—will rely on the translational symmetry introduced here.

The next chapter builds upon this foundation by examining several of the most important crystal structures encountered in semiconductor and materials physics, including the diamond, zinc blende, wurtzite, and layered structures. These examples demonstrate how different atomic bases, when combined with underlying Bravais lattices, produce the diverse crystal structures responsible for the properties of real materials.

# Chapter 3.2 — Crystal Structures and Symmetry

The previous chapter established that every crystalline solid can be described as a **Bravais lattice** combined with an appropriate **atomic basis**. While the Bravais lattice determines the periodic arrangement of equivalent points in space, the basis specifies the actual atoms attached to each lattice point. Together, they define the crystal structure of a material.

This distinction is more than a mathematical convenience. Materials that share the same underlying Bravais lattice can exhibit entirely different physical properties because of differences in their atomic basis. Conversely, chemically similar materials may adopt different crystal structures under different conditions, leading to dramatic changes in their electrical, optical, and mechanical behavior.

For researchers in semiconductor physics, photonics, and computational materials science, a small number of crystal structures appear repeatedly. Silicon crystallizes in the diamond structure, gallium arsenide adopts the zinc blende structure, gallium nitride is commonly found in the wurtzite structure, and many modern two-dimensional materials consist of layered crystals held together by van der Waals forces.

Beyond identifying these structures, it is equally important to understand their **symmetry**. Symmetry is one of the central organizing principles of solid-state physics. It determines which physical processes are allowed, governs the degeneracy of electronic states, constrains optical selection rules, and provides the mathematical foundation for modern electronic structure theory. In many respects, symmetry serves as the language through which the laws of physics are expressed in crystalline solids.

This chapter introduces the crystal structures most frequently encountered in modern materials science before developing the essential concepts of point groups and space groups that describe their symmetry.

---

# 3.2.1 Diamond Crystal Structure

Among all crystal structures, the **diamond structure** occupies a particularly important position in solid-state physics. It is adopted by several Group IV elements, including

* carbon (diamond),
* silicon,
* germanium.

These materials form the foundation of modern semiconductor technology.

Although commonly referred to as a crystal structure, diamond can be understood more fundamentally as

* a **face-centered cubic (FCC) Bravais lattice**, and
* a **two-atom basis**.

The basis consists of atoms located at

$$
(0,0,0)
$$

and

$$
\left(\frac14,\frac14,\frac14\right),
$$

expressed in fractional coordinates of the cubic unit cell.

Thus,

$$
\boxed{
\text{Diamond Structure}
=
\text{FCC Lattice}
+
\text{Two-Atom Basis}
}
$$

This second atom shifts every lattice point by one-quarter of the body diagonal, producing the characteristic tetrahedral arrangement.

```text
FCC lattice point

●

↓

Add basis

●      ○

↓

Repeat throughout space

Diamond crystal
```

Each atom forms **four covalent bonds** directed toward the corners of a tetrahedron.

```text
           ●
          /
         /
    ●---○---●
         \
          \
           ●
```

The angle between neighboring bonds is approximately

$$
109.47^\circ,
$$

known as the **tetrahedral bond angle**. This geometry results from the \(sp^3\) hybridization introduced in the previous chapter.

The diamond structure possesses several important characteristics:

* every atom has four nearest neighbors,
* all bonds are equivalent,
* bonding is strongly directional,
* the crystal exhibits high structural stability.

These features explain many familiar properties of diamond and silicon. Diamond is exceptionally hard because every atom participates in a rigid three-dimensional covalent network. Silicon shares the same structural framework but possesses weaker covalent bonds, making it less mechanically rigid while retaining the tetrahedral coordination essential for semiconductor behavior.

The diamond structure also provides the periodic potential responsible for the formation of electronic energy bands, a subject explored in later chapters.

---

# 3.2.2 Zinc Blende Structure

Many technologically important compound semiconductors crystallize in the **zinc blende** structure.

Examples include

* gallium arsenide (GaAs),
* indium phosphide (InP),
* zinc sulfide (ZnS),
* indium antimonide (InSb).

Structurally, zinc blende closely resembles the diamond lattice. It is likewise constructed from

* an FCC Bravais lattice,
* a two-atom basis.

The crucial difference is that the two basis atoms are **different chemical species**.

For example,

```text
Ga      As

Ga      As

Ga      As
```

rather than

```text
Si      Si

Si      Si

Si      Si
```

Every gallium atom remains tetrahedrally coordinated with four arsenic atoms, and vice versa.

Thus the local geometry is almost identical to diamond.

The distinction lies in the electronic structure.

Because gallium and arsenic possess different electronegativities,

* electrons are not shared equally,
* the bonds acquire partial ionic character,
* inversion symmetry is lost.

This broken inversion symmetry has profound physical consequences.

Materials with zinc blende symmetry exhibit

* piezoelectric effects,
* nonlinear optical phenomena,
* different electron and hole effective masses,
* direct electronic transitions in many compounds.

These characteristics make zinc blende semiconductors particularly valuable for optoelectronic devices, although the detailed device physics will be explored in later handbooks.

---

# 3.2.3 Wurtzite Structure

Another major crystal structure encountered in semiconductor physics is **wurtzite**.

This structure is common in

* gallium nitride (GaN),
* aluminum nitride (AlN),
* zinc oxide (ZnO),
* silicon carbide (certain polytypes).

Unlike diamond and zinc blende, which belong to the cubic crystal system, wurtzite belongs to the **hexagonal crystal system**.

Despite this difference, the local bonding environment remains remarkably similar.

Each atom still possesses

* four nearest neighbors,
* tetrahedral coordination,
* predominantly covalent bonding.

The distinction arises from the stacking sequence of atomic layers.

In cubic structures, close-packed layers follow

$$
ABCABC\cdots
$$

stacking.

In wurtzite,

$$
ABABAB\cdots
$$

stacking occurs instead.

```text
Diamond / Zinc Blende

A
 B
  C
A
 B
  C


Wurtzite

A
 B
A
 B
A
 B
```

Although this difference appears subtle, it lowers the crystal symmetry and introduces a unique crystallographic direction known as the **c-axis**.

As a result,

* many physical properties become anisotropic,
* spontaneous polarization develops,
* piezoelectric effects become particularly strong.

These features are central to nitride semiconductor physics and distinguish wurtzite materials from their cubic counterparts.

---

# 3.2.4 Layered Crystal Structures

Not all crystals possess strong three-dimensional bonding networks.

In many materials, atoms form strongly bonded two-dimensional layers that are connected only through weak van der Waals interactions.

Examples include

* graphite,
* graphene,
* hexagonal boron nitride (hBN),
* molybdenum disulfide (MoS₂),
* tungsten diselenide (WSe₂).

The bonding hierarchy is

```text
Strong covalent bonding
────────────────────────

Weak van der Waals

────────────────────────
Strong covalent bonding

Weak van der Waals

────────────────────────
```

Within each layer,

* covalent bonding is strong,
* electrons may move efficiently,
* mechanical rigidity is high.

Between layers,

* bonding is weak,
* layers separate relatively easily,
* mechanical exfoliation becomes possible.

This unusual combination gives layered materials several remarkable properties.

Graphite conducts electricity efficiently along the planes but much less effectively perpendicular to them.

Graphene represents an isolated atomic layer possessing exceptional electrical conductivity and mechanical strength.

Transition metal dichalcogenides exhibit thickness-dependent electronic structures, with several compounds transitioning from indirect to direct band-gap semiconductors as the number of layers decreases.

Layered structures therefore illustrate how crystal geometry alone can dramatically influence material behavior.

---

# 3.2.5 The Importance of Symmetry

The crystal structures discussed above differ not only in atomic arrangement but also in **symmetry**.

Symmetry describes the operations that leave a crystal unchanged.

If a crystal is rotated, reflected, or translated and appears identical to its original configuration, the corresponding transformation is called a symmetry operation.

Symmetry is not merely a geometric property. It has deep physical significance because the laws governing electrons and atomic vibrations must respect the symmetry of the crystal.

Consequently, symmetry determines

* degeneracy of electronic states,
* allowed optical transitions,
* elastic behavior,
* magnetic ordering,
* piezoelectricity,
* ferroelectricity,
* phonon modes,
* selection rules in spectroscopy.

Rather than solving complicated physical problems directly, physicists often first determine the symmetry of the crystal. Symmetry alone frequently reveals which physical phenomena are possible and which are forbidden.

---

# 3.2.6 Symmetry Operations

Several fundamental symmetry operations are used to describe crystals.

## Identity

The identity operation leaves the crystal unchanged.

Although mathematically trivial, it is included because every symmetry group must contain the identity element.

---

## Rotation

A crystal possesses rotational symmetry if it appears unchanged after rotation through a certain angle.

Common rotational axes include

* twofold (\(180^\circ\)),
* threefold (\(120^\circ\)),
* fourfold (\(90^\circ\)),
* sixfold (\(60^\circ\)).

For example, a square lattice exhibits fourfold rotational symmetry.

```text
Rotate 90°

□

↓

□
```

---

## Mirror Reflection

Mirror symmetry exists when reflection across a plane leaves the crystal unchanged.

```text
Left | Right

● ● | ● ●

Reflection

● ● | ● ●
```

Mirror planes are particularly important in determining optical and electronic properties.

---

## Inversion

A crystal possesses inversion symmetry if every point

$$
(x,y,z)
$$

corresponds to an equivalent point

$$
(-x,-y,-z).
$$

Diamond possesses inversion symmetry, whereas zinc blende does not.

The absence of inversion symmetry often gives rise to nonlinear optical effects and piezoelectricity.

---

## Improper Rotation

Some crystals remain unchanged only after a combination of rotation followed by reflection.

These combined operations become important in advanced crystallography and group theory.

---

# 3.2.7 Point Groups

When only rotational and reflection symmetries are considered—without translations—the resulting symmetry classification is called a **point group**.

A point group consists of all symmetry operations that leave at least one point fixed.

These operations include

* rotations,
* reflections,
* inversion,
* improper rotations.

Translations are intentionally excluded.

Point groups describe the **external symmetry** of crystals and strongly influence measurable physical properties.

For example,

* optical anisotropy,
* piezoelectricity,
* elastic constants,
* magnetic symmetry,

are primarily determined by the crystal's point group.

Remarkably, only

$$
32
$$

distinct crystallographic point groups exist in three-dimensional crystals.

These thirty-two groups encompass every possible combination of rotational and reflection symmetries compatible with a periodic lattice.

---

# 3.2.8 Space Groups

Although point groups describe rotational symmetry, real crystals also possess **translational symmetry**.

To account for both translation and point-group operations simultaneously, crystallography introduces **space groups**.

A space group combines

* lattice translations,
* rotations,
* mirror reflections,
* inversion,
* screw axes,
* glide planes.

This relationship may be summarized as

$$
\boxed{
\text{Space Group}
=
\text{Translation}
+
\text{Point Group Operations}
}
$$

Two additional symmetry elements become possible because of translation.

### Screw Axis

A screw axis combines

* rotation,
* translation along the rotation axis.

Rather than returning to its original position after rotation alone, the crystal becomes identical only after both operations are performed together.

---

### Glide Plane

A glide plane combines

* reflection,
* translation parallel to the reflecting plane.

These compound operations have no analog in isolated molecules and arise solely because crystals possess translational periodicity.

Accounting for all permissible combinations of these symmetry operations leads to one of the most celebrated results in crystallography:

> **There are exactly 230 unique three-dimensional crystallographic space groups.**

Every ideal crystalline material belongs to one of these 230 groups.

Space groups provide the complete symmetry description of a crystal and form the foundation of modern crystallography, diffraction analysis, electronic band calculations, and computational materials science.

While a detailed treatment of space groups lies beyond the scope of this handbook, recognizing their role is essential. In advanced electronic structure methods, the space group is often the starting point for determining crystal geometry, simplifying calculations, and predicting physical properties.

---

# 3.2.9 Crystal Structure as the Bridge to Electronic Structure

With the concepts developed in this chapter, the description of crystalline matter has progressed significantly. Individual atoms are no longer viewed as isolated quantum systems but as components of an extended periodic arrangement defined by both geometry and symmetry.

The specific crystal structure adopted by a material determines the distances and orientations between neighboring atoms, the overlap of electronic orbitals, and the symmetry of the periodic potential experienced by electrons. These structural characteristics govern how atomic energy levels broaden into bands, how waves propagate through crystals, and how materials respond to external fields.

Thus, crystal structure is not simply a geometric description of atomic positions—it is the framework that shapes the quantum mechanics of solids. The concepts of translational symmetry introduced in Chapter 3.1 and the structural and symmetry principles developed here will soon reappear in a new mathematical language: **reciprocal space**. There, the periodicity of crystals will be described not in terms of real-space atomic positions but through wavevectors and Fourier analysis, providing the natural foundation for diffraction, Bloch waves, and electronic band theory.
