# SoccerMetrics
Data Visualization Project

In this project, we present SoccerMetrics : an interactive data visualization system for analysing football team at an individual level (intra-team and player-player dynamics) and a collective level (opponent-dependent strategies and tactics). 
In SoccerMetics, we first use a player view to quantify the importance of a player to his team. This is done using a player-player pass graph to encode player dynamics, dynamic heatmaps of events to represent his dominance on the pitch, and control heatmaps that show how a team's performance suffers in his absence. Performing this importance analysis for 'n' players allows us to define the team's spine : the set of 'n' players most crucial to the team's success.
Once the important players of a team have been identified, we then use SoccerMetrics' team view to analyse the different strategies adopted by a team, given the calibre of the opponent. Here, team-level event heatmaps are used to encode the locations and degree of a team's dominance in a particular match, build-up play passing networks are used to illustrate pass length and frequency so as to identify the team's chance-creation strategies, and parallel coordinates are used to reinforce the conclusions drawn from both these visualizations. This analysis allows us to see whether or not a team changes its attacking, defending and tactical strategies depending on the quality of its opposition.
Finally, having identified which players and which strategies a team uses to be successful, we visualise and analyse an outlier match: a match which the team lost. In this visualisation, we look at the opposition's (the winner's) strategies to see how they disrupted the successful team's strategies. This could be in terms of nullifying the successful team's spine (once again visualised by the player view), or by interrupting and breaking-up its build-up play (using the team view).
Through this workflow, SoccerMetrics aims to analyse what players a team relies on, what strategies make it successful, and how to nullify these players and tactics in order to win.
