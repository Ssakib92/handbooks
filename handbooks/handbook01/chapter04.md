# Chapter 4 — Crystal Directions, Planes, and Epitaxy

The previous chapters established how atoms organize into periodic crystal structures and how symmetry provides the mathematical language for describing crystalline solids. While these concepts characterize the internal arrangement of atoms, many physical phenomena depend not only on the crystal itself but also on **direction** within the crystal.

Unlike gases or liquids, crystalline materials are generally **anisotropic**—their properties vary with direction. An electron moving along one crystallographic direction may experience a different periodic potential than one moving along another. Likewise, crystal growth, fracture, diffusion, thermal conductivity, and optical propagation often depend strongly on orientation.

To describe these directional properties, crystallography introduces a systematic notation for crystal directions and crystal planes known as **Miller indices**. This notation provides a universal language for identifying atomic arrangements, crystal surfaces, and growth orientations.

The importance of crystal orientation extends far beyond geometry. Modern semiconductor devices are fabricated by growing one crystal on top of another with atomic precision, a process known as **epitaxy**. Whether the deposited crystal grows smoothly or develops defects depends critically on the alignment of crystallographic planes and the degree of lattice matching between the two materials.

This chapter therefore bridges crystallography and materials engineering. We first develop the mathematical description of crystal directions and planes before examining how crystal orientation governs epitaxial growth and the mechanical strain that arises from lattice mismatch.

---

# 4.1 Crystallographic Directions

A crystal lattice possesses translational symmetry, meaning that many directions within the crystal are physically equivalent. Rather than describing these directions using ordinary Cartesian vectors, crystallography employs a notation directly related to the lattice geometry.

A **crystallographic direction** specifies the orientation of a vector connecting equivalent lattice points.

For a lattice with primitive vectors

$$
\mathbf{a}_1,\;
\mathbf{a}_2,\;
\mathbf{a}_3,
$$

a direction may be expressed as

$$
\mathbf{R}
=
u\mathbf{a}_1
+
v\mathbf{a}_2
+
w\mathbf{a}_3,
$$

where

$$
u,\;v,\;w
$$

are integers after reducing the vector to its smallest equivalent form.

The direction is written using square brackets,

$$
\boxed{[uvw]}.
$$

For example,

$$
[100]
$$

represents the direction parallel to the \(x\)-axis,

while

$$
[110]
$$

points along the face diagonal of a cubic unit cell,

and

$$
[111]
$$

points along the body diagonal.

A simple visualization for a cubic crystal is

```text
          z
          ↑
         ● (111)
        /|
       / |
      /  |
     ●---● → y
    /
   /
  ●────────→ x

[100] : x-axis
[110] : face diagonal
[111] : body diagonal
```

Although these examples use cubic crystals, the notation applies to all crystal systems.

---

## Families of Equivalent Directions

Many crystals possess symmetry that makes several directions physically equivalent.

For example,

$$
[100],\;
[010],\;
[001],
$$

are equivalent in a cubic crystal because rotating the crystal maps one direction onto another without changing the atomic environment.

Such equivalent directions are grouped into a **family of directions**, denoted by angle brackets,

$$
\boxed{\langle100\rangle}.
$$

Similarly,

$$
\langle111\rangle
$$

represents all body-diagonal directions of the cubic lattice.

The distinction between an individual direction and a family of equivalent directions is important because many physical properties depend on symmetry rather than on one specific orientation.

---

# 4.2 Crystal Planes

Just as directions describe orientations of vectors, **crystal planes** describe orientations of flat atomic layers within a crystal.

Many physical phenomena occur on or between crystal planes.

Examples include

* crystal growth,
* cleavage,
* slip during plastic deformation,
* surface chemistry,
* thin-film deposition,
* diffraction.

To describe these planes consistently, crystallography employs the **Miller index** notation.

---

# 4.3 Miller Indices

A crystal plane is specified by three integers,

$$
(hkl),
$$

called its **Miller indices**.

Unlike direction indices, which describe vectors, Miller indices identify the orientation of planes.

The notation is written using parentheses,

$$
\boxed{(hkl)}.
$$

The procedure for determining Miller indices consists of four steps.

### Step 1

Determine where the plane intersects the crystallographic axes.

Suppose the plane cuts the axes at

$$
x=a,\quad
y=\infty,\quad
z=\infty.
$$

---

### Step 2

Express the intercepts in units of the lattice parameters.

For the above example,

$$
(1,\infty,\infty).
$$

---

### Step 3

Take the reciprocals.

$$
\left(
1,\;
0,\;
0
\right).
$$

(The reciprocal of infinity is zero.)

---

### Step 4

Reduce to the smallest set of integers.

Thus the plane is

$$
(100).
$$

Another example:

Suppose a plane intersects

$$
a,\;
b,\;
c.
$$

The reciprocals become

$$
(1,1,1),
$$

yielding the

$$
(111)
$$

plane.

---

## Negative Indices

If a plane intersects the negative direction of an axis, a bar is placed above the corresponding integer.

For example,

$$
(\bar111)
$$

indicates that the plane intersects the negative \(x\)-axis while intersecting the positive \(y\)- and \(z\)-axes.

---

# 4.4 Physical Meaning of Miller Indices

Although Miller indices arise from a geometric construction, they possess direct physical meaning.

Each set of indices identifies a family of equally spaced atomic planes within the crystal.

For example,

```text
(100)

│
│
│
│
│


(110)

///////
///////
///////


(111)

\\\\\\\
\\\\\\\
\\\\\\\
```

Different planes expose different atomic arrangements because each intersects the crystal lattice differently.

Consequently,

* surface atomic density,
* surface energy,
* chemical reactivity,
* growth rate,

depend strongly on the Miller indices.

---

## Families of Equivalent Planes

Equivalent planes are grouped into **families of planes**, denoted by braces,

$$
\boxed{\{100\}}.
$$

For cubic crystals,

$$
(100),
(010),
(001),
(\bar100),
(0\bar10),
(00\bar1)
$$

all belong to

$$
\{100\}.
$$

Similarly,

$$
\{111\}
$$

contains all symmetry-equivalent body-diagonal planes.

---

# 4.5 Relationship Between Directions and Planes

In cubic crystals, an elegant relationship exists.

The direction

$$
[hkl]
$$

is perpendicular to the plane

$$
(hkl).
$$

For example,

$$
[100]
\perp
(100),
$$

and

$$
[111]
\perp
(111).
$$

This relationship does **not** generally hold for lower-symmetry crystal systems, where the lattice vectors are not mutually orthogonal.

Recognizing this distinction is important when extending crystallographic concepts beyond cubic materials.

---

# 4.6 Surface Orientation

A real crystal is finite and therefore possesses surfaces.

The orientation of these surfaces is specified by their Miller indices.

Different crystal surfaces expose different atomic configurations.

For silicon, the three most important surfaces are

* (100),
* (110),
* (111).

Each exhibits distinct atomic densities and surface reconstructions.

A qualitative comparison is shown below.

| Surface | Atomic Packing          | Relative Surface Energy | Common Applications                            |
| ------- | ----------------------- | ----------------------- | ---------------------------------------------- |
| (100)   | Moderate                | Moderate                | Integrated circuits                            |
| (110)   | Dense in one direction  | Intermediate            | Power devices, anisotropic etching             |
| (111)   | Highest packing density | Lowest                  | Crystal growth, MEMS, some photonic structures |

Because the local bonding environment differs from one surface to another, many physical properties become orientation dependent.

Surface orientation influences

* oxidation,
* etching,
* adsorption,
* epitaxial growth,
* defect formation.

The choice of crystal orientation is therefore an important design parameter in semiconductor manufacturing and thin-film growth.

---

# 4.7 Epitaxy

Modern semiconductor technology relies heavily on the ability to grow one crystal upon another while preserving crystallographic order.

This process is called **epitaxy**.

The term originates from the Greek words

* *epi* — upon,
* *taxis* — ordered arrangement.

During epitaxial growth, atoms arriving at the surface arrange themselves according to the crystal lattice of the underlying substrate.

Rather than forming randomly oriented grains, the deposited material continues the existing crystal structure.

```text
Growing Film

□□□□□□□□□□

□□□□□□□□□□

──────────────
Interface

■■■■■■■■■■■■

■■■■■■■■■■■■

Substrate
```

If the crystal structures are compatible, the deposited film inherits the orientation of the substrate.

This atomic registry is essential for producing high-quality semiconductor heterostructures with minimal defects.

---

## Types of Epitaxy

Several forms of epitaxy are encountered in materials science.

### Homoepitaxy

The deposited material is identical to the substrate.

Example:

Silicon grown on silicon.

Advantages include

* perfect lattice matching,
* very low defect density,
* high crystal quality.

---

### Heteroepitaxy

The deposited material differs chemically from the substrate.

Examples include

* GaAs on Ge,
* GaN on sapphire,
* SiGe on silicon,
* AlGaAs on GaAs.

Heteroepitaxy enables band-gap engineering and the fabrication of advanced semiconductor structures but introduces additional challenges because the lattice constants are usually different.

---

# 4.8 Lattice Mismatch

When two different crystalline materials are joined, their equilibrium lattice constants generally differ.

Let

* \(a_s\) denote the substrate lattice constant,
* \(a_f\) denote the film lattice constant.

The lattice mismatch is defined as

$$
\boxed{
f
=
\frac{a_f-a_s}{a_s}
}
$$

where

* \(f>0\) indicates that the film naturally prefers a larger lattice,
* \(f<0\) indicates that the film naturally prefers a smaller lattice.

Perfect lattice matching,

$$
a_f=a_s,
$$

is relatively uncommon in heteroepitaxy.

Most material combinations therefore experience some degree of mismatch.

---

## Physical Consequences

If the mismatch is very small,

the deposited film can elastically deform to match the substrate.

However, as the film becomes thicker, the elastic energy stored in the crystal increases.

Eventually, it becomes energetically favorable to introduce crystal defects that partially relieve this strain.

Thus, lattice mismatch directly influences

* crystal quality,
* dislocation density,
* electronic performance,
* optical efficiency.

---

# 4.9 Strain in Crystalline Materials

The elastic deformation caused by lattice mismatch is called **strain**.

For a film constrained by the substrate,

the strain is approximately

$$
\boxed{
\varepsilon
=
\frac{a-a_0}{a_0}
}
$$

where

* \(a_0\) is the natural lattice constant,
* \(a\) is the strained lattice constant.

Depending on the sign,

$$
\varepsilon>0
$$

corresponds to **tensile strain**, while

$$
\varepsilon<0
$$

indicates **compressive strain**.

```text
Natural spacing

●──●──●──●


Compressed

●─●─●─●


Stretched

●────●────●
```

Although strain initially appears to be a purely mechanical effect, it also modifies the electronic structure of the crystal.

Changing the interatomic spacing alters

* orbital overlap,
* electronic energy levels,
* band structure,
* carrier mobility,
* optical transition energies.

Thus, strain engineering has become a powerful tool for tailoring material properties without changing chemical composition.

Modern strained-silicon transistors and many III–V semiconductor heterostructures exploit this principle to enhance device performance by deliberately modifying the crystal lattice.

---

# 4.10 Crystal Orientation as the Link Between Structure and Properties

The concepts developed in this chapter complete the description of crystals in real space. We began by introducing crystallographic directions and planes, providing a precise language for describing orientation within a crystal. Miller indices allow us to identify specific atomic planes and directions, while surface orientation explains why different crystal faces exhibit distinct physical and chemical behavior.

These ideas naturally extend to epitaxy, where crystallographic alignment governs the growth of one crystal upon another. The concepts of lattice mismatch and strain demonstrate that even slight differences in atomic spacing can profoundly influence crystal quality and electronic properties.

Beyond their practical importance, crystal directions and planes play a central role in the theoretical development of solid-state physics. The spacing between crystal planes determines diffraction conditions, while the periodic arrangement of lattice planes provides the foundation for constructing the reciprocal lattice. In the next part of this handbook, the focus shifts from **real space**, where atoms occupy periodic positions, to **reciprocal space**, where crystal periodicity is described in terms of wavevectors and Fourier analysis. This new perspective will become indispensable for understanding diffraction, electron waves, and the electronic structure of crystalline solids.

