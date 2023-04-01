# EasyRent ChangeLog

## 31/3/23

### Design

- added color variable on `:root` at [base.scss](src/base.scss).
- added nice-subtle gradient to text in buttons and [superiority](src/pages/index/main/superiority/superiority.module.scss) text.
- added 25px top and bottom padding to every section in index.
- make most foreground elements and borders grey-ish instead of _"blinding light"_.
- integrate [featured](src/pages/index/main/featured) and [review](src/pages/index/main/review) to [main](src/pages/index/main/main.tsx)

### Component(s)

- created [featured component](src/pages/index/main/featured/) but not build yet.
- added [review component](src/pages/index/main/review/).

### NavBar

- make CTA undragable to prevent button dragged without link.

### Review component

- added background picture at [review_bg.png](public/imgs/review_bg.png).
- added profile picture(s) at [public/pp/](public/pp/).
- make profile picture undragable.

### Misc.

- added link to this changelog in [readme.me](readme.md).
- added "the" in [readme.me](readme.md). before: _"… is licensed under GNU GPL (General …"_ after: _"… is licensed under **the** GNU GPL (General …"_
- update link to LICENSE and CREDIT in [readme.me](readme.md).

### ToDo(s)

- [ ] make review card cycles every X second(s) with a nice and smooth transition.
