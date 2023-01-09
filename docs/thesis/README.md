---
title: Inforance
lang: en-US
sidebarDepth: 2
home: true
heroImage: /images/thesishero.png
heroText: Inforance
tagline: An Examination of College Student Health Insurance Policies and its Impact in the United States and Designing an App
actionText: Read Thesis Paper →
actionLink: https://drive.google.com/file/d/1sAvNe9WHv3aT6_ktXsnrAT-Gb2hCkWs4/view
---

<br>

<br>

<br>

<iframe width = "100%" height = "400" src="https://www.youtube.com/embed/6ByCpplZk2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

<br>

Health insurance is a very complex area. This thesis focuses on the area of student insurance literacy and its impact. Current college students and their generation as a whole have been shown to have limited health insurance literacy. Furthermore, the uneven distribution of health insurance-related educational resources among universities is not helping students improve their knowledge of health care. For various reasons, some universities’ student health insurance policies do not sufficiently protect their students. To address this issue, this thesis introduces a novel metric like ERVO (Emergency Room Visit Value Ratio) and AMS (Annual Maximum Speeding) to measure coverage efficacy and economic efficacy among 54 universities in the United States.

Additionally, the thesis proposes one possible solution by [designing an app](https://www.sketch.com/s/f405f49b-22bb-4e60-8485-152b0a38c25d) named “Inforance,” with the goals of helping NYU students choose healthcare wisely and potentially helping ease some of the confusion in this area.

# Index

[ERVO](#ervo) 

[AMS](#ams)

# ERVO

## What is ERVO?

Currently there are very few research studies comparing the disparity of SHIP coverage among different universities. Additionally, I could not find any similar study to the quality of SHIP coverage. 

One metric currently used to measure the insurance quality is called “actuarial value”. It did a great job to provide an overall level, but this is way too over-generalized. The formula of actuarial value is “Actuarial Present Value / Average Cost (FirstQuoteHealth).” Additionally, this metric failed to present the variation between different polities, price variation. “ ... health insurance plans can vary greatly even within the same actuarial metal levels.(FirstQuoteHealth)”
Without any metrics existing to represent specific for student body, I created a metric called Emergency Visit Value Ratio (ERVO) Here’s couple reason why I created ERVO and its significance: 

Young adults are a generally healthy population, other than students with chronic or pre-existing conditions. Their top reason for using healthcare resources is emergency visits. As mentioned in the previous background section, the data provided by UnitedHealthcare shows that the average ER visit charge is $2,200. This ratio is a measurement of “good emergency cover” vs. “bad emergency coverage” counts on the difference between premium average. The ERVO created an imaginary scenario of one student having one ER visit, which cost $2,200. There are two factors that influence the ERVO: how much their insurance will cover for this $2200 emergency visit compared to medium, and How much they need to pay for premium per year compared to 54 universities' average premium. 

The formulary of this ratio could be written as: 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20211129105927.png)



## ERVO (U.S. News Ranking)

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/BasedonRanking.jpg)



## ERVO (Ranked by Value)

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/rankingvalue.jpg)



# AMS

## What is AMS?

This number is intended to evaluate a situation when the insured patient faces catastrophic accidents that require multiple experience procedures or a long stay in the hospital. 

The index uses the formulary of 
$$
AMS = Out of Pocket Maximum + Premium
$$
This number represents the maximum amount of money per year that insured students need to pay out of pocket when facing catastrophic medical events. The lower number represents the colleges that have better coverage for students when facing this situation. 

The **average AMS** among 54 universities is $**7,376.21**. 

Purdue University has the lowest AMS, at $2,850. Its policy has a $1,500 out-of-pocket maximum, and students need to pay the premium of $1,350 per year. Emory University has the highest AMS, $11,018. Its policy has the highest out-of-pocket maximum among all universities at $7,000, and students need to pay the premium of $4,018 per year. New York University has the second-highest AMS at $10,995. Its policy has a fairly high out-of-pocket maximum of $7,350, and students need to pay the premium of $3,645 per year. This number is extremely useful to evaluate the coverage university provides in big, catastrophic medical events like car accidents and heart attacks. When insured students face these catastrophic medical events, while Purdue University students only need to pay $2,850, NYU students need to spend more than three times that number: $10,995. 

<br>

## AMS Data

| Ranking | Name                                        | AMS    |
| ------- | ------------------------------------------- | ------ |
| 1       | Princetown                                  | 7780   |
| 2       | MIT                                         | 7089   |
| 2       | Columbia                                    | 6892   |
| 2       | Harvard University                          | 7040   |
| 5       | Yale University                             | 9000   |
| 6       | The University of Chicago                   | 6066   |
| 6       | Standford                                   | 10192  |
| 8       | University of Pennsylvania                  | 5374   |
| 9       | JHU                                         | 5482   |
| 9       | Caltech                                     | 4576   |
| 9       | Duke                                        | 5605   |
| 9       | Northwestern U                              | 6386   |
| 13      | Dartmouth College                           | 7163   |
| 14      | Washington University in St. Louis          | 6942   |
| 14      | Vanderbilt                                  | 7269   |
| 14      | Brown                                       | 10554  |
| 17      | Rice University                             | 8650   |
| 17      | Cornell University                          | 6135   |
| 19      | University of Notre Dame                    | 8680   |
| 20      | UCLA                                        | 4799   |
| 21      | Emory                                       | 11018  |
| 22      | UCB                                         | 7038   |
| 23      | University of Michigan Ann Arbor            | 5295.8 |
| 23      | Georgetown                                  | 5965   |
| 25      | Carnegie Mellon University                  | 7603   |
| 25      | University of Virginia                      | 8148   |
| 27      | USC                                         | 10009  |
| 28      | University of North Carolina at Chapel Hill | 6616.8 |
| 28      | Wake Forest                                 | 7724   |
| 28      | Florida                                     | 9148   |
| 28      | UCSB                                        | 9882   |
| 28      | NYU                                         | 10995  |
| 28      | Tufts                                       | 7755   |
| 34      | Rochester                                   | 9290   |
| 34      | UCSD                                        | 5855   |
| 36      | UCI                                         | 4962   |
| 36      | Boston College                              | 5535   |
| 38      | William Mary                                | 9889   |
| 38      | Georgia Institute of Technology             | 8896   |
| 38      | UT Austin                                   | 9694   |
| 38      | UC Davis                                    | 7720   |
| 42      | University of Wisconsin–Madison             | 5476   |
| 42      | Tulane                                      | 7926   |
| 42      | Boston University                           | 8554   |
| 42      | Case Western Reserve University             | 9692   |
| 42      | Brandeis                                    | 5509   |
| 47      | UIUC                                        | 8986   |
| 48      | Georgia                                     | 8767   |
| 49      | Purdue University                           | 2850   |
| 49      | Lehigh                                      | 3557   |
| 49      | Northeastern                                | 5799   |
| 49      | Pepperdine                                  | 8096   |
| 49      | OSU                                         | 6066   |
| 49      | Villanova                                   | 6325   |



# Data Source



## SHIP Data

::: warning Data Might Be Outdated 

The data gathered here might change by University at any time; please use it as reference only. For detailed price information, please visit the individual university website, and check for their student health policy information for more detail. 
:::

| University                                   | Deductible $ | Out of Pocket Maximum $ | Premium Per Year $ | Referral | Network / Company | Doctor Visit Copay | Urgent Care Copay | Emergency Copay | Lab, X-Ray, CT |
| -------------------------------------------- | ------------ | ----------------------- | ------------------ | -------- | ----------------- | ------------------ | ----------------- | --------------- | -------------- |
| Purdue University                            | 200          | 1500                    | 1350               | No       | BCBS              | 10%                | 10%               | 50 then 10%     | 10%            |
| University of Wisconsin–Madison              | 500          | 4000                    | 1476               | No       | Wellfleet         | 10%                | 10%               | 100 then 20%    | 10%            |
| University of Michigan Ann Arbor             | 100          | 3500                    | 1795.8             | No       | BCBS              | 20                 | 20                | 75              | 10%            |
| Washington University in St. Louis           | 350          | 5000                    | 1942               | Yes      | UHCSR             | 25                 | 40                | 20%             | 0              |
| UCI                                          | 300          | 3000                    | 1962               | Yes      | BCBS              | 15                 | 25                | 125             |                |
| Lehigh                                       | 50           | 1500                    | 2057               | No       | Wellfleet         | 5%                 | 5%                | 5%              | 0%             |
| UIUC                                         | 250          | 6850                    | 2136               | No       | UHCSR             | 20%                | 20%               | 20%             | 20%            |
| Vanderbilt                                   | 250          | 5000                    | 2269               | Yes      | Aetna             | 25                 | 10%               | 100 then 10%    | 10%            |
| Northeastern                                 | 0            | 3500                    | 2299               | No       | UHCSR             | 25                 | 25%               | 50 then 10%     | 10%            |
| Georgia                                      | 500          | 6350                    | 2417               | Yes      | UHCSR             | 20                 | 20%               | 20%             | 20%            |
| JHU                                          | 150          | 3000                    | 2482               | Yes      | Cigna / Wellfleet | 20 after 10%       | 50                | 50              | 10%            |
| William Mary                                 | 150          | 7350                    | 2539               | Yes      | UHCSR             | 25                 | 20                | 100             | 20%            |
| Georgia Institute of Technology              | 500          | 6350                    | 2546               | No       | UHCSR             | 20                 | 20%               | 20%             | 20%            |
| Carnegie Mellon University                   | 0            | 5000                    | 2603               | No       | Aetna             | 25                 | 25                | 125             | 40             |
| University of North Carolina at Chapel  Hill | 500          | 4000                    | 2616.8             | No       | BCBS              | 25 then 20%        | 75 then 20%       | 400 then 20%    | 20%            |
| Yale University                              | 0            | 6350                    | 2650               | Yes      | Other             | 20                 | 0                 | 50              | 0              |
| Rice University                              | 250          | 6000                    | 2650               | No       | Aetna             | 20 then 25%        | 25%               | 150 then 25%    | 25%            |
| University of Notre Dame                     | 500          | 6000                    | 2680               | No       | Aetna             | 20%                | 20%               | 100 then 20%    | 20%            |
| Wake Forest                                  | 200          | 5000                    | 2724               | No       | BCBS              | 45                 | 45 then 20%       | 200 then 20%    | 20%            |
| Pepperdine                                   | 150          | 5350                    | 2746               | Yes      | BCBS              | 30                 |                   | 100 then 20%    | 20%            |
| Princetown                                   | 200          | 5000                    | 2780               | Yes      | Aetna             | 10                 | 90%               | 90%             | 90%            |
| Florida                                      | 200          | 6350                    | 2798               | Yes      | UHCSR             | 25 after 20%       | 20%               | 100 then 20%    | 20%            |
| UCLA                                         | 0            | 2000                    | 2799               | Yes      | BCBS              | 15                 | 25%               | 125             | 10%            |
| Tulane                                       | 250          | 5000                    | 2926               | Yes      | UHCSR             | 30                 | 30                | 100             | 10%            |
| Rochester                                    | 0            | 6350                    | 2940               | Yes      | Aetna             | 25                 | 25                | 100             | 0%             |
| Georgetown                                   | 200          | 3000                    | 2965               | No       | UHCSR             | 25                 |                   | 100             | 10%            |
| Boston University                            | 250          | 5500                    | 3054               | Yes      | Aetna             | 40                 | 40                | 200             | 20%            |
| MIT                                          | 100          | 4000                    | 3089               | No       | BCBS              | 25                 |                   | 100             | 50             |
| UT Austin                                    | 350          | 6600                    | 3094               | No       | BCBS              | 20                 | 35                | 150 then 20%    | 20%            |
| Cornell University                           | 0            | 3000                    | 3135               | No       | Aetna             | 25                 | 50                | 100             | 10%            |
| University of Virginia                       | 350          | 5000                    | 3148               | No       | Aetna             | 25 then 10%        | 20%               | 150 then 10%    | 20%            |
| Case Western Reserve University              | 400          | 6500                    | 3192               | No       | Aetna             | 30                 | 20% after 30      | 250 then 20%    | 20%            |
| UCSB                                         | 300          | 6600                    | 3282               | Yes      | BCBS              | 25                 | 25                | 200             | 20%            |
| OSU                                          | 150          | 2700                    | 3366               | No       | UHCSR             | 20                 | 25                | 100 then 10%    | 10%            |
| Brandeis                                     | 0            | 2000                    | 3509               | No       | BCBS              | 20                 | 20                | 75              | 25%            |
| Boston College                               | 150          | 2000                    | 3535               | No       | BCBS              | 25                 | 25                | 150             | 0%             |
| Caltech                                      | 250          | 1000                    | 3576               | No       | BCBS              | 15                 | 20%               | 20%             | 20%            |
| Duke                                         | 0            | 2000                    | 3605               | No       | BCBS              | 35, 20%            | 45                | 150 then 20%    | 20%            |
| NYU                                          | 0            | 7350                    | 3645               | Yes      | Wellfleet         | 20                 | 35 then 20%       | 250 then 20%    | 20%            |
| Tufts                                        | 100          | 4000                    | 3755               | Yes      | UHCSR             | 20                 | 25                | 100 then 20%    | 20%            |
| UCB                                          | 250          | 3250                    | 3788               | Yes      | Wellfleet         | 25                 | 50                | 250             | 10%            |
| UCSD                                         | 500          | 2000                    | 3855               | Yes      | BCBS              | 30                 | 50                | 125             |                |
| University of Pennsylvania                   | 400          | 1500                    | 3874               | Yes      | Aetna             | 35                 | 35                | 100             | 50             |
| Columbia                                     | 0            | 3000                    | 3892               | Yes      | Aetna             | 30                 | 60                | 150             | 90%            |
| USC                                          | 450          | 6000                    | 4009               | No       | Aetna             | 20                 | 50                | 200 then 10%    | 20%            |
| Emory                                        | 400          | 7000                    | 4018               | Yes      | Aetna             | 35 then 20%        | 25 then 20%       | 150 then 10%    | 20%            |
| Harvard University                           | 0            | 3000                    | 4040               | No       | BCBS              | 35                 | 35                | 100             | 0              |
| Dartmouth College                            | 250          | 3000                    | 4163               | Yes      | Wellfleet         | 20%                | 20%               | 20%             | 20%            |
| Brown                                        | 300          | 6350                    | 4204               | No       | UHCSR             | 15                 | 25%               | 100             | 0              |
| Villanova                                    | 200          | 2000                    | 4325               | No       | UHCSR             | 10%                | 10%               | 10%             | 10%            |
| Northwestern U                               | 250          | 2000                    | 4386               | Yes      | Aetna             | 20%                | 20%               | 20% after 100   | 20%            |
| The University of Chicago                    | 500          | 1500                    | 4566               | No       | UHCSR             | 20                 | 20                | 100             | 0              |
| UC Davis                                     | 100          | 2500                    | 5220               | Yes      | BCBS              | 15                 | 25                | 75              | 25             |
| Standford                                    | 500          | 4000                    | 6192               | Yes      | Other             | 35                 | 50                | 100             | 50             |

## Usage and Credit

You can use all image, data from this page without notice or credit. 

<br>

## ERVO Data

| Ranking | Name                               | ERVO    | School Brand Color |
| ------- | ---------------------------------- | ------- | ------------------ |
| 28      | Tufts                              | -104.39 | #3f8ede            |
| 9       | Duke                               | -77.85  | #022169            |
| 38      | UCD                                | -75.785 | #B6922A            |
| 36      | Boston College                     | -66.39  | #C60200            |
| 20      | UCLA                               | -63.375 | #2874ae            |
| 5       | Yale                               | -61.015 | #00346a            |
| 9       | Caltech                            | -49.775 | #ff6c0a            |
| 23      | Georgetown                         | -48.74  | #011F46            |
| 42      | Brandeis                           | -48.715 | #003478            |
| 9       | Northwestern U                     | -45.33  | #4f2984            |
| 28      | UCSB                               | -45.125 | #003660            |
| 6       | Standford                          | -44.56  | #A4052D            |
| 13      | Dartmouth College                  | -41.805 | #006a3e            |
| 27      | USC                                | -39.37  | #a21933            |
| 34      | UCSD                               | -36.93  | #172c49            |
| 28      | North Carolina                     | -34.6   | #132849            |
| 17      | Rice                               | -24.77  | #00205b            |
| 2       | Harvard                            | -19.145 | #a61d30            |
| 19      | Notre Dame                         | -18.34  | #0c2340            |
| 38      | William Mary                       | -12.35  | #10523E            |
| 48      | Georgia                            | -10.73  | #B81B38            |
| 21      | Emory                              | -10.17  | #022169            |
| 42      | Tulane                             | -10.15  | #215A4E            |
| 49      | Northeastern                       | -0.235  | #B70112            |
| 1       | Princeton                          | 0.79    | #E07322            |
| 49      | OSU                                | 8.775   | #C8103B            |
| 49      | Villanova                          | 10      | #002561            |
| 14      | Brown                              | 14.505  | #523528            |
| 6       | U Chicago                          | 14.82   | #8b0021            |
| 25      | Carnegie Mellon University         | 15.67   | #c41230            |
| 2       | MIT                                | 16.61   | #9E1E32            |
| 22      | UCB                                | 18.495  | #011840            |
| 28      | Florida                            | 21.215  | #004a83            |
| 8       | University of Pennsylvania         | 21.45   | #001A57            |
| 42      | Case Western Reserve University    | 27.925  | #0A2F4B            |
| 2       | Columbia                           | 29.795  | #bad9eb            |
| 28      | Wake Forest                        | 31.015  | #d1b786            |
| 25      | U Virginia                         | 32.935  | #f84b1e            |
| 17      | Cornell University                 | 33.145  | #AD1F24            |
| 28      | NYU                                | 33.705  | #57068C            |
| 38      | UT Austin                          | 33.79   | #bf5700            |
| 42      | Boston University                  | 34.425  | #CC0000            |
| 34      | Rochester                          | 36.23   | #0F4076            |
| 38      | Georgia Tech                       | 38.145  | #B3A369            |
| 9       | JHU                                | 43.475  | #1F3667            |
| 49      | Pepperdine                         | 43.61   | #06215c            |
| 23      | University of Michigan Ann Arbor   | 45.7    | #F4B227            |
| 14      | Vanderbilt                         | 46.845  | #C6AC1E            |
| 47      | UIUC                               | 48.95   | #13294A            |
| 49      | Lehigh                             | 50.195  | #191948            |
| 14      | Washington University in St. Louis | 52.015  | #A70B10            |
| 36      | UCI                                | 60.33   | #01619F            |
| 49      | Purdue University                  | 61.385  | #C9B38C            |
| 42      | University of Wisconsin–Madison    | 63.705  | #C6002B            |



# Contact

Irwin Qi

wq2024@nyu.edu



<br>

<br>

<br>

<br>