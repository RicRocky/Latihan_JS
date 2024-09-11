// let ipsBetween = (start, end) => {
//     let arrStart = start.split(".");
//     let arrEnd = end.split(".");

//     let jumlah = 0;
//     for (let i = 0; i < arrStart.length; i++) {
//         if ( arrEnd[i] != arrStart[i] ) {
//             if ( i == 3) {
//                 jumlah += arrEnd[3] - arrStart[3];
//             }else if (i == 2) {
//                 jumlah +=(arrEnd[2] - arrStart[2]) * 256;
//             }else if (i == 1) {
//                 jumlah +=(arrEnd[1] - arrStart[1]) * 65536;
//             }else if (i == 0) {
//                 jumlah +=(arrEnd[0] - arrStart[0]) * 16777216;
//             }
//         }
//     }

//     return jumlah;
// }

const ipsBetween = (start, end) => {
    const num = ip => ip.split('.')
                        .map(x => parseInt(x))
                        .reduce((acc, e) => acc * 256 + e);  
    
    return num(end) - num(start);
}