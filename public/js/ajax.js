class MyAjax {
    constructor(token) {
        this.token = token;
    }
    getAjax(apivegpont, tomb, myCallback) {
        tomb = [];
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                result.forEach((element) => {
                    tomb.push(element);
                });
                myCallback(tomb);
            },
        });
    }
    postAjax(apivegpont, adat) {
        $.ajax({
            url: apivegpont,
            type: "POST",
            data: adat,
            success: function () {
                window.location.reload();
            },
        });
    }
    putAjax(apivegpont, adat, id) {
        $.ajax({
            url: apivegpont + "/" + id,
            type: "PUT",
            data: adat,
            success: function () {
                window.location.reload();
            },
        });
    }
    deleteAjax(apivegpont, id) {
        $.ajax({
            url: apivegpont + "/" + id,
            type: "DELETE",
            success: function () {
                window.location.reload();
            },
        });
    }
}
