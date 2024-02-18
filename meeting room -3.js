var mostBooked = function (n, meetings) {
    const jak = new Array(n).fill().map(() => ({ bookings: 0, endTime: 0 }));
    meetings.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < meetings.length; i++) {
        const [start, end] = meetings[i];
        let booked = false;

        for (let j = 0; j < n; j++) {
            if (jak[j].endTime <= start) {
…        }
    }

    let maxRoom = jak.reduce((max, room, i) => room.bookings > max.bookings ? room : max);
    return jak.indexOf(maxRoom);
};
