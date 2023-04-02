# OceanTrack

OceanTrack takes latitude and longitude coordinates for an initialization (think trash dump) and iteratively computes a trajectory for that trash over time. This trajectory is computed based on interpolated vectors fields for ocean current and wind from NASA's OSCAR dataset.
<br/>
In addition to the development of the forecasting algorithm, I also developed a pilot website (not fully integrated with the python scripts) as a proof-of-concept application.

## Forecasting Algorithm

The Forecasting Algorithm iteratively performs the following steps:

1. Calculate interpolated direction vector
2. Adjust position according to direction vector
3. Adjust position according to a small random perturbation

The interpolation is formulated based on inverse euclidean distance. An example with scalar neighbors (in reality the neighbors are 2-dimensional vectors) is shown below.

![interpolation_plot](https://user-images.githubusercontent.com/76015889/229338871-0f717f12-3c8e-4cca-a2af-a6988f822a64.jpg)

As the floating-point position approaches a grid point, the consensus vector (result of interpolation) becomes closer to the grid point value. The interpolation function incorporates a small lambda term in the inverse of the euclidean distance for avoidance of NaN values.

Random perturbations are incorporated to simulate ambiguous variability that cannot feasibly be deterministically modelled.

## Results

Below are plots illustrating the forecasting performance of OceanTrack

![random_perturbations](https://user-images.githubusercontent.com/76015889/229339248-4b6209d4-a14a-4d11-ae75-cddc0ee73abd.png)
Forecasted paths for a single initial position. Note variability due to random perturbations but cohesive results

![magma_5000_coastal_incidence](https://user-images.githubusercontent.com/76015889/229339305-9bbee040-8d52-4249-90a0-db28e4c9664c.jpg)
Coastal incidence heatmap: brighter values indicate greater volume of ocean-borne trash

