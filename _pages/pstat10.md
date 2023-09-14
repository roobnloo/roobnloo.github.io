---
layout: page
permalink: /pstat10/
title: PSTAT 10 Principles of Data Science with R
nav: false
---

<span style="color: red;">This is the website of an intro data science class I taught the summer of 2022. I largely developed all of the material on my own. You are free to use it, just credit me if your use is significant.</span>

## Welcome to PSTAT 10

I will post all course material on this page including slides, worksheets, homework,
worksheet and homework solutions.

Worksheets and homework are released at the beginning of the week and are due the following Tuesday evening.
Worksheet solutions are released the day *before* they are due.
Assignments should be submitted on Gradescope.

[Syllabus](/pstat10/syllabus.pdf)\
[Sample assignment template](/pstat10/assignment_template.Rmd)

#### Office hours
- **Robin**: Friday 10am - 11am @ IV Starbucks, Monday 4pm - 5pm @ zoom link on Gauchospace
- **Jeff**: Monday 1:30pm - 3:30pm @ zoom link on Gauchospace
- **Olivier**: Tuesday 1:45pm - 3:45pm @ Building 434 Room 113

<h3 class="week">Week 1</h3>
[Worksheet 1](/pstat10/assignments/ws1.pdf) \| [Solutions](/pstat10/assignments/ws1_sol.html) \|
[Worksheet 2](/pstat10/assignments/ws2.pdf) \| [Solutions](/pstat10/assignments/ws2_sol.html) \|
[Homework 1](/pstat10/assignments/hw1.pdf) \| [Solutions](/pstat10/assignments/hw1_sol.html)

<div class="grid">
  {% include lecturegrid.html lecnum='1' descr='Introduction' %}
  {% include lecturegrid.html lecnum='2' descr='Vector Operations' %}
  {% include lecturegrid.html lecnum='3' descr='Functions' %}
</div>

\\
**Notes:** [Worksheet files](/pstat10/assignments/week1_files.zip) \| [mtrush1.pgm](/pstat10/lectures/mtrush1.pgm) \| [Rushmore example](/pstat10/lectures/rushmore.html) \| [Why use seq?](/pstat10/lectures/why_use_seq.html)

<h3 class="week">Week 2</h3>
[Worksheet 3](/pstat10/assignments/ws3.pdf) \| [Solutions](/pstat10/assignments/ws3_sol.html) \|
[Worksheet 4](/pstat10/assignments/ws4.pdf) \| [Solutions](/pstat10/assignments/ws4_sol.html) \|
[Homework 2](/pstat10/assignments/hw2.pdf) \| [Solutions](/pstat10/assignments/hw2_sol.html)
<div class="grid">
  {% include lecturegrid.html lecnum='4' descr='Problem Solving' %}
  {% include lecturegrid.html lecnum='5' descr='Data Frames/Tibbles' %}
  {% include lecturegrid.html lecnum='6' descr='Working with Tibbles' %}
  {% include lecturegrid.html lecnum='7' descr='Base R Plots' %}
</div>

<h3 class="week">Week 3</h3>
[Worksheet 5](/pstat10/assignments/ws5.pdf) \| [Solutions](/pstat10/assignments/ws5_sol.html) \|
[Worksheet 6](/pstat10/assignments/ws6.pdf) \| [Solutions](/pstat10/assignments/ws6_sol.html) \|
[Homework 3](/pstat10/assignments/hw3.pdf) \| [Solutions](/pstat10/assignments/hw3_sol.html)
<div class="grid">
  {% include lecturegrid.html lecnum='8' descr='Simulation' %}
  {% include lecturegrid.html lecnum='9' descr='Discrete RVs' %}
  {% include lecturegrid.html lecnum='10' descr='Continuous RVs' %}
</div>

<h3 class="week">Week 4</h3>
[Worksheet 7](/pstat10/assignments/ws7.pdf) \| [Solutions](/pstat10/assignments/ws7_sol.html) \|
[Worksheet 8](/pstat10/assignments/ws8.pdf) \| [Solutions](/pstat10/assignments/ws8_sol.html) \|
[Homework 4](/pstat10/assignments/hw4.pdf) \| [Solutions](/pstat10/assignments/hw4_sol.html)
<div class="grid">
  {% include lecturegrid.html lecnum='11' descr='More Simulation' %}
  {% include lecturegrid.html lecnum='12' descr='Relational DBs' %}
  {% include lecturegrid.html lecnum='13' descr='SQL Queries' %}
  {% include lecturegrid.html lecnum='14' descr='Aggregation/Joins' %}
</div>

\\
**Files:** [hibbs.dat](/pstat10/lectures/Lec11_files/hibbs.dat) \| [Chinook_Sqlite.sqlite](/pstat10/lectures/Chinook_Sqlite.sqlite)

<h3 class="week">Week 5</h3>
[Worksheet 9](/pstat10/assignments/ws9.pdf) \| [Solutions](/pstat10/assignments/ws9_sol.html) \|
[Worksheet 10](/pstat10/assignments/ws10.pdf) \| [Solutions](/pstat10/assignments/ws10_sol.html) \|
[Homework 5](/pstat10/assignments/hw5.pdf) \| [Solutions](/pstat10/assignments/hw5_sol.html)
<div class="grid">
  {% include lecturegrid.html lecnum='15' descr='More DBs' %}
  {% include lecturegrid.html lecnum='16' descr='Intro ggplot' %}
  {% include lecturegrid.html lecnum='17' descr='More ggplot' %}
  {% include lecturegrid.html lecnum='18' descr='Tidy data' %}
</div>

<h3 class="week">Final Week</h3>
[Practice exam](/pstat10/assignments/final_practice.pdf) \| [Solutions](/pstat10/assignments/final_practice_solutions.pdf) \| [tinyclothes DB](/pstat10/assignments/tc_clean.sqlite)\
[Final exam](/pstat10/assignments/final.pdf) \| [Solutions](/pstat10/assignments/final_solutions.pdf)

[Grade distribution](/pstat10/assignments/grades.html)

- **No lectures this week**. Office hours and sections are as usual.
- A practice final will be administered during Tuesday's lecture. Use it to practice writing code with a pencil.
- Go over practice final during Wednesday sections.
- Thursday: Final exam during regular lecture time. One sheet/two sides of handwritten notes is allowed. Scratch paper will be provided.


***

### **Install R and RStudio**
R version at least 4.1.0 is required for this class. I insist you install R 4.2.0.
If you cannot install R or RStudio for whatever reason, RStudio Cloud is available.

[Install R from CRAN](https://cran.r-project.org/)\
[Install RStudio](https://www.rstudio.com/products/rstudio/download/#download)\
[RStudio Cloud](https://rstudio.cloud/)

### **Recommended resources**
#### Community
[StackOverflow](https://stackoverflow.com/)\
[R stats community on Twitter](https://twitter.com/hashtag/rstats)\
[Cheatsheets](https://www.rstudio.com/resources/cheatsheets/) (particularly recommend the `dplyr`, RMarkdown, and RStudio IDE cheatsheets)

#### Books (optional)
[Davies - The Book of R](https://nostarch.com/bookofr) (the "official" course text)\
[Matloff - The Art of R Programming](https://nostarch.com/artofr.htm) (good descriptions of base R)\
[Matloff - Probability and Statistics for Data Science](https://www.routledge.com/Probability-and-Statistics-for-Data-Science-Math--R--Data/Matloff/p/book/9781138393295) (for simulation)\
[Wickham - R for Data Science](https://r4ds.had.co.nz/index.html) (for `tidyverse`/data science workflow)\
[Wickham - Advanced R](https://adv-r.hadley.nz/) (if you want to know how R really works)

#### General coding practice
[Leetcode](https://leetcode.com/)\
[Advent of Code](https://adventofcode.com/)\
[algorithms.wtf](http://algorithms.wtf/)