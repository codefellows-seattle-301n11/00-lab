##### How did you determine which rules should be placed in each new CSS file?

The most prominent elements and font calls go in base.css. Higher level, generally reusable elements go in layout. Specific sub-elements and one-offs go in modules. 

---

##### Did you do any refactoring of the existing CSS? If so, briefly explain what you did and why.

I didn't do any refactoring per-se, as it all worked fairly straightforwardly. I was surprised by how easily the css split up in these three buckets. 

I did attempt to add the reset.css code to the base.css and de-reference reset.css (following the suggestion in http://www.anotheruiguy.com/ux-design-dev/_book/smacss/breakdown.html), but for some reason that failed so I backed that out. 
