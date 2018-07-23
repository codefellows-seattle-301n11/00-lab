##### How did you determine which rules should be placed in each new CSS file?

I tried to first look at the scope of the rules, rules with very broad scopes or rules affecting many elements at once went to base.css.  Then I focused on which CSS rules affected the specific layout of the page.  Elements that had set dimensions or were positioned differently through their rules went to layout.css.  Then the rules that only modified one or two individul elements or rules that had no affect on the layout of the page went into module.css.

##### Did you do any refactoring of the existing CSS? If so, briefly explain what you did and why.

Only a very little bit.  I altered the source of the recipe background file as it was misdirected to the wrong location to locate the image.  I also commented out the image for the hr element as I couldn't find the hr-img.gif file in the repo.  I replaced it with a solid grey background so it would still show on the page.
