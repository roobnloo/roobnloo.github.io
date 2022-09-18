---
layout: page
title: Soft-thresh
description: Visualizing the relationship between the soft-thresholding operator and the LASSO solution (shinyapp)
img: assets/img/vizlasso/vizlassocard.png
importance: 2
category: work
---

<iframe height="780" width="100%" frameborder="no" src=" https://roobnloo.shinyapps.io/vizlasso/"> </iframe>

Let $$\mathbf{y} \in \mathbb{R}^n$$ be a response vector and $$\mathbf{X}\in \mathbb{R}^{n\times p}$$
the observed data matrix. LASSO regression looks for the minimizer $$\hat\beta\in\mathbb{R}^p$$
of the following penalized objective function:

$$
L(\beta) = \frac{1}{2n}\lVert \mathbf{y} - \mathbf{X}\beta\rVert_2^2 + \lambda \lVert\beta\rVert_1
$$

where $$\lVert\beta\rVert_1 = \sum_{i=1}^p \lvert\beta_i\rvert$$ is the $$\ell_1$$ penalty.

In the case where $$n = p = 1$$, the solution has a nice closed form given by the *soft-thresholding* operator.
To see this, expand to find

$$
L(\beta) = \frac{1}{2}\beta^2 + (\operatorname{sign}(\beta)\lambda - y)\beta + \frac{1}{2}y^2.
$$

Since the final term does not contain $$\beta$$, it suffices to solve

$$
\hat\beta = \operatorname*{argmin}_{\beta \in \mathbb{R}} \frac{1}{2}\beta^2 + (\operatorname{sign}(\beta)\lambda - y)\beta
$$


The relationship between $$\hat\beta$$ and the soft-thresholding operator is visualized above.

