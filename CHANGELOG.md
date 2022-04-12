4.3.0
=====

*   (feature) Allow functions in `LabeledLink` `reference`.


4.2.0
=====

*   (feature) Add `TYPE_RAW`.


4.1.1
=====

*    (bug) Remove unintended BC.


4.1.0
=====

*   (feature) Allow array of `BaseComponentConfig` in `SingleRelationType`.
*   (feature) Allow array of `BaseComponentConfig` in `ArrayRelationType`.


4.0.1
=====

*    (bug) Remove outdated `Component` and generic type from `BaseComponentConfig`.


4.0.0
=====

*   (bc) `SingleRelationType` and `ArrayRelationType` now use `BaseComponentConfig` instead of `ComponentDataConfig`.


3.2.0
=====

*   (feature) Add `TYPE_HEADLINE`.


3.1.0
=====

*   (feature) Add support for custom data types.


3.0.1
=====

*   (bug) Move `RteData` and `ReferencesData` to `mayd-contentful-adapter`.


3.0.0
=====

*   (bc) Remove `TYPE_CONTENT_MODEL`.
*   (feature) Add `MetaData` type.


2.1.0
=====

*   (feature) Add `RteData` interface.
*   (feature) Add `ReferencesData` type.


2.0.5
=====

*   (improvement) Restructure `DataType`.


2.0.4
=====

*   (improvement) Add `string[]` option to `DataType`.


2.0.3
=====

*   (bug) Fix `RelationType` field `data` for multiple child types.


2.0.2
=====

*   (bug) Remove `TYPE_REFERENCE`.
*   (bug) Remove `label` from `LinkReference`.


2.0.1
=====

*   (bug) Remove `(RelationType | undefined)[]` from `DataType`.


2.0.0
=====

*   (improvement) Simplify type structure.
*   (bc) Rename `RelationTypeData` to `ComponentDataConfig`.
*   (feature) Add `TYPE_REFERENCE`.


1.0.7
=====

*  (improvement) Add fields `title` and `label` to type `LinkReference`.


1.0.6
=====

*  (improvement) Add type `contentModel`.
*  (improvement) Accept arrays of relation types to handle `OR` relationships.


1.0.5
=====

*  (improvement) Additionally accept `string`, `asset` or `labeledLink` for `data` within `RelationType`.


1.0.4
=====

*  (improvement) Add `Asset`, `LabeledLink`, `LinkReference` and `RelationTypeData`.


1.0.3
=====

*   (improvement) Add generic type to `BaseComponentConfig`.
*   (improvement) Rename constants for types.


1.0.2
=====

*   (improvement) Make field `data` of `BaseComponentConfig` optional.


1.0.1
=====

*   (bug) Fix type `BaseComponentConfig`.


1.0.0
=====

*   (feature) Initial release.
