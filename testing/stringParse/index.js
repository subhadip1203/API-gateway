

function replaceUrl(url, obj) {
    try {
        const err = []
        const arr = url.split("/")
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] && arr[i].charAt(0) == ':') {
                if (obj[arr[i]]) {
                    arr[i] = obj[arr[i]]
                }
                else {
                    err.push(arr[i])
                }
            }
        }
        if (err.length) {
            throw new Error(`no vaue for dynamic part ${JSON.stringify(err)}`, );
        }
        else {
            return arr
        }

    } catch (err) {
        return err
    }

}


const str = "/ok/abc/:id/ytryuio"
const obj = {
    ":id1": 10
}
console.log(replaceUrl(str, obj))