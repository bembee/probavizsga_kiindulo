$(function () {
    const token = $('meta[name="csrf-token"]').attr("content");
    const myAjax = new MyAjax(token);
    const szakdogak = [];
    myAjax.getAjax("api/szakdogak", szakdogak, tablazatKiir);

    function tablazatKiir(tomb) {
        $(".tablazat").empty();
        $(".tablazat").append(
            "<thead><th>Szakdolgozat címe</th><th>Készítők neve</th><th>Github link</th><th>Szakodolgozat elérhetősége</th><th></th> <th></th></thead>"
        );
        $(".tablazat").append("<tbody></tbody>");
        for (let index = 0; index < tomb.length; index++) {
            const element = tomb[index];
            $(".tablazat").append(
                "<tr><td>" +
                    element.id +
                    "</td>" +
                    "<td>" +
                    element.tagokneve +
                    "</td>" +
                    "<td>" +
                    "<a href=" +
                    element.githublink +
                    ">" +
                    element.githublink +
                    "</td>" +
                    "<td>" +
                    "<a href=" +
                    element.oldallink +
                    ">" +
                    element.githublink +
                    "</td>" +
                    "<td class='modosit' id=" +
                    index +
                    ">" +
                    "Módosít" +
                    "</td>" +
                    "<td class='torol' id=" +
                    index +
                    ">" +
                    "Törlés" +
                    "</td></tr>"
            );
        }
    }

    $(window).on("torles", function (event) {
        myAjax.deleteAjax("api/szakdogak", event.detail.id);
    });
});

class Szakdoga {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;
        this.modositGomb = this.elem.find(".modosit");
        this.torlesGomb = this.elem.find(".torol");
        $(this.modositGomb).on("click", () => {
            this.modositasTrigger();
        });
        $(this.torlesGomb).on("click", () => {
            this.torlesTrigger();
        });
    }
    torlesTrigger() {
        const torlesEsemeny = new CustomEvent("torles", { detail: this });
        window.dispatchEvent(torlesEsemeny);
    }
}
