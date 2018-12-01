/* Tuple (immutable, ordered, fix-sized, heterogeneous) */

let ageAndName = (24, "Lil' Reason");
let my3dCoordinates = (20.0, 30.5, 100.0);

let ageAndName: (int, string) = (24, "Lil' Reason");

/* a tuple type alias */
type coord3d = (float, float, float);
let my3dCoordinates: coord3d = (20.0, 30.5, 100.0);

let (_, y, _) = my3dCoordinates; /* now you've retrieved y */

