---
title: Arnold Node
lang: en-US
sidebarDepth: 2
---

# Arnold Node Connection

### Quick Reference Guide

| Name of The file | Type Out                                      | Node In Standard Surface     |                                                        |
| ---------------- | --------------------------------------------- | ---------------------------- | ------------------------------------------------------ |
| Diffuse          | Out Color                                     | Base Color                   |                                                        |
| Specular         | Out Color                                     | Specular Color               |                                                        |
| Roughness        | Out Alpha                                     | Specular Roughness           |                                                        |
| Bump             | Out Alpha                                     | Bump Value<br />Bump 2D Node | Need Bump 2D Node Before go into aiStandard Surface    |
| Bump 2D Node     | Out Normal                                    | Normal Camera                | Need to change bump depth, 0.02 in bump2d nodes        |
| Normal           | Out Alpha                                     | Bump Value<br />Bump 2D Node | bump 2D, arrtributes, use as **Tangent Space Normals** |
| Displacement     | Click on Surace 1SG <br />Displacement Shader |                              |                                                        |
| AO               | Out Color                                     | aiMultiply1<br />Input 1     |                                                        |
| Change Diffuse   | Out Color                                     | aiMultiply1<br />Input 2     |                                                        |
| aiMultiplay1     | Out Color                                     | Base Color                   |                                                        |

Connection Editor

Left 	Bump 2D: Bump. outNormal

Right	Bump 2D: Tangent Space Normals. normalCamera

outNormal link to Normal Camera



https://www.youtube.com/watch?v=nw3IaU4pY04
