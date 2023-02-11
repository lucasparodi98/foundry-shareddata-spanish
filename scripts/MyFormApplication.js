/**
 * Define your class that extends FormApplication
 */
export class MyFormApplication extends FormApplication {
  constructor(item) {
    super();
    this.item = item;
    this.flags = item.flags;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['form'],
      popOut: true,
      template: `./modules/SharedData/scripts/templates/myFormApplication.html`,
      id: 'my-form-application',
      title: 'Configurar SharedData',
    });
  }

  getData() {
    let itemName = {
      none: 'Seleccionar una Opción',
      summon: 'Invocar Criaturas',
    }
    // Send data to the template
    return {
      itemName: itemName,
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
  }

  async _updateObject(event, formData) {
    this.flags.SharedData.configType = formData.configType;
    return this.item.update(this.flags);
  }
}

export default MyFormApplication;
