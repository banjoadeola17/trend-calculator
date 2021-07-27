function getTrend (arr) {
    console.log("running")
    let trend = []
    for( let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2] || arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) {
            const startTrendIndex = arr.indexOf(arr[i])
            console.log("startTrendIndex", startTrendIndex)
            trend.push(arr[i] > arr[i + 1] && arr[i + 1] > arr[1 + 2], arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2], startTrendIndex)
            console.log("trend", trend)
            return trend
        }
    }

}

getTrend([57, 5, 30, 19, 18, 12, 7, 18, 22, 32, 20, 11, 8, 5])
