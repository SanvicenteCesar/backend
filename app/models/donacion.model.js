module.exports = (sequelize, Sequelize) => {
    const Donacion = sequelize.define("donaciones", {
            tipo_ayuda: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            voluntarioId: {
                type: Sequelize.STRING(75),
                allowNull: false
            },
            descripcion: {
                type: Sequelize.STRING(75),
                allowNull: false
            },
            fecha: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            timestamps: false
        }

    );

    return Donacion;
};