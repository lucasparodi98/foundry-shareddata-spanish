import MyFormApplication from "./MyFormApplication.js";

window.MyFormApplication = MyFormApplication;

Hooks.once('ready', async function () {

  Hooks.on(`renderItemSheet5e`, async (app, html, data) => {
    //console.log("ASE: Caught actor sheet render hook!", data);
    //console.log('ASE Spell List: ', aseSpellList);

    //Verificar si existe Flag, si no, crea uno
    console.log(app.document.flags.SharedData);
    if (app.document.flags.SharedData == null) {
      console.log("CREANDO");
      await app.document.setFlag('SharedData', 'configType', 'none');
    }

    const lucasBtn = $(`<a class="ase-item-settings" title="Advanced Spell Effects"><i class="fa-solid fa-l"></i>SH</a>`);
    lucasBtn.click(async (ev) => {
      new MyFormApplication(app.document).render(true);
    });
    console.log(app.document.flags);
    html.closest('.app').find('.ase-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    lucasBtn.insertAfter(titleElement);
  });

});