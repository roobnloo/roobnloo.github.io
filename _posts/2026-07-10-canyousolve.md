---
layout: post
title: Can you solve our problem?
date: 2026-07-10
description: An interview problem from a prop trading firm
tags: statistics regression
thumbnail: assets/img/canyousolve/five-rings-problem.png
---

I received this card from the recruitment table of Five Rings, a proprietary trading firm, at JSM 2024.
$$
\newcommand{\EE}{\mathbb{E}}
\newcommand{\PP}{\mathbb{P}}
\newcommand{\Cov}{\mathrm{Cov}}
\newcommand{\Var}{\mathrm{Var}}
$$

{% include figure.liquid path= "assets/img/canyousolve/problem-card.png" title= "Recruitment problem" class= "img-fluid rounded" %}

The answer is $f(z)$ is not monotonic and has four critical points (roughly at $z = -2.58, -4.52, 2.58, 4.52$) as plotted below.

<p align="center"><iframe height="480" width="100%" frameborder="no" src="/assets/img/canyousolve/solution-interactive.html"> </iframe></p>
<div class="caption">
Figure 1: Interactive plot of $f(z)$ (blue) and the linear minimum mean squared estimator (LMMSE) line $z/(2+(\eta-1)\gamma)$ (red) as $\gamma$ and $\eta$ vary.
</div>

# Explanation
Let 

$$
\begin{aligned}
X &\sim N(0,1) \\ 
W &\sim \mathrm{Bernoulli}(\gamma) \\ 
Y \mid W = w &\sim N(0, \eta\, w + (1-w)).
\end{aligned}
$$

The original problem is specified by $\gamma = 1/2$ and $\eta = 9$. We wish to characterize the behavior of the regression function

$$f(z) = \EE(X \mid X+ Y = z).$$

Since $(X, X+Y)$ is not jointly Gaussian (owing to the non-Gaussianity of $Y$), we don't expect the true regression function to be linear. Intuitively, a large observation of $X+Y$ generally gives evidence that the component $X$ is large, except it also gives competing evidence that $w = 1$, i.e. that we are in the higher variance noise regime for $Y$, which trades off against the value of $X$.

Define $Z = X+Y$. We have

$$
f(z) = \underbrace{\EE(X \mid Z = z, W = 0)}_{f(z\mid W = 0)}\,\PP(W=0\mid Z = z) + \,\underbrace{\EE(X \mid Z = z, W = 1)}_{f(z\mid W = 1)}\,\PP(W=1\mid Z = z),
$$

so it remains to explore these components where conditioning on $W$ specifies the mixture regime.
In either case, we have that $(X, X+Y)$ is jointly Gaussian (it is the linear transformation of a bivariate Gaussian with independent components), hence the true regression functions are linear and given by the OLS equation:

$$
f(z\mid W = w) = \underbrace{0}_{\EE(X\mid Z= z,\,W = w)} + \underbrace{\frac{\Cov(X, Z \mid Z=z,\,W = w)}{\Var(Z \mid Z=z,\,W = w)}}_{\text{regression slope}}\, (z - \underbrace{0}_{\EE(Z \mid Z=z,\,W = w)}).
$$

We just need to compute a few values:

$$
\begin{aligned}
\Cov(X,Z\mid W = w) &= \Var(X\mid W = w) + \Cov(X, Y\mid W = w) = 1, \\
\Var(Z\mid W = 0) &= 2, \\
\Var(Z\mid W = 1) &= 1 + \eta.
\end{aligned}
$$

For the probabilities we can use Bayes' theorem

$$
\PP(W = w\mid Z= z) = \frac{g_{Z\mid W}(z\mid w)\,\PP(W = 0)}{g_{Z\mid W}(z\mid 0)\,\PP(W = 0) + g_{Z\mid W}(z\mid 1)\,\PP(W = 1)},
$$

where $g_{Z\mid W}(z\mid w)$ is the conditional density of $Z\mid W$.
Conditional on the value of $W$, $Z$ is merely the sum of two Gaussians, hence Gaussian. Denoting by $\phi_v$ the pdf of a $N(0,v)$ r.v., this yields

$$
g_{Z\mid W}(z \mid 0) = \phi_2(z)\quad\text{and}\quad g_{Z\mid W}(z\mid 1) = \phi_{1+\eta}(z).
$$
 
Putting it together,

$$
f(z) = \frac{z}{2}\cdot\frac{(1-\gamma)\phi_2(z)}{(1-\gamma)\phi_2(z) + \gamma\,\phi_{1+\eta}(z)} +\frac{z}{1+\eta}\cdot\frac{\gamma\,\phi_{1+\eta}(z)}{(1-\gamma)\phi_2(z) + \gamma\,\phi_{1+\eta}(z)}.
$$

This is non-linear in $z$ unless $\gamma \in \{0,1\}$. What if we were ignorant of the noise process and ran a naive OLS of $X$ on $Z$? 
For this we need the law of total variance

$$
\begin{aligned}
\Var(Y) &= \EE(\Var(Y\mid W)) + \underbrace{\Var(\EE(Y\mid W))}_0 \\
&= \Var(Y\mid W = 0)\,\PP(W=0) + \Var(Y\mid W = 1)\,\PP(W=1) \\
&= (1-\gamma) + \eta\gamma.
\end{aligned}
$$

The best linear model for the regression function (specifically the LMMSE; linear minimum mean squared error) is $X = \beta Z + \varepsilon$ where
the least squares slope is given by

$$
\beta = \frac{\Cov(X, Z)}{\Var(Z)} = \frac{\Var(X) + \Cov(X,Y)}{\Var(X) + \Var(Y) + 2\Cov(X, Y)}
= \frac{1}{2 + (\eta-1)\gamma},
$$

which evaluates to $1/6$ with $\gamma = 1/2$, $\eta = 9$.

The regression function along with the best linear approximation is plotted in Figure 1 above. Since $f(z)$ depends on both $\gamma$ (the mixture weight) and $\eta$ (the noise variance ratio), it's instructive to see how the shape of the regression function changes as these parameters vary. Drag the sliders below to see $f(z)$ morph from the LMMSE line at $\gamma \in \{0,1\}$, where the true regression function is linear, to a strongly non-linear curve as $\gamma$ approaches values where both regimes compete, and to see how larger $\eta$ sharpens this effect.

# Relevance to trading

Suppose every price move $Z$ contains a "true" signal $X$ (informed order flow, fundamental value update) plus noise $Y$ (uninformed flow, mean-reverting noisy moves). Normal market conditions may look like $N(0,\sigma^2)$, but occasionally you get large noise movements based on news, block trades, uninformed flow.

The LMMSE vs. $f(z)$ gap is a PnL opportunity. A naive trader using the linear model will over-respond to large moves. A trader who knows $f(z)$ has a more accurate model of the true value and can trade against the overreaction.