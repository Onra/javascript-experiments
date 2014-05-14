/**
 * Created by arnaudchrist on 14/05/14.
 */
var hanoi = function hanoi(disc, src, aux, dest) {
    if (disc > 0) {
        hanoi(disc - 1, src, dest, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dest);
        hanoi(disc -1, aux, src, dest);
    }
};

hanoi(4, 'Src', 'Aux', 'Dst');