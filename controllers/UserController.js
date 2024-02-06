const User = require('../models/User');

const store = async (req, res) => {
    try {
        const { nome, sobrenome, email, senha, nivel_acesso } = req.body;

        let user = await User.findOne({
            where: {
                email
            }
        });

        if (user) {
            res.status(401).json({
                message: 'E-mail já existe no banco de dados'
            });
        } else {
            user = await User.create({
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha,
                nivel_acesso: nivel_acesso,
            });
        
            res.status(200).json({
                user
            });
        }
        
        
    } catch (error) {
        res.status(400).json({
            error
        });
    }
    
}

const index = async (req, res) => {
    try {
        const users = await User.findAll({});

        if (!users) {
            res.status(401).json({
                message: 'Nenhum registro encontrado'
            });
        } else {
            res.status(200).json({
                users
            });
        }
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}

const show = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findOne({
            where: {
                id: id
            }
        });

        if (!user) {
            res.status(401).json({
                message: 'Registro não encontrado'
            });
        } else {
            res.status(200).json({
                user
            });
        }
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, sobrenome, email, senha, nivel_acesso } = req.body;

        let user = await User.findOne({
            where: {
                id: id
            }
        });

        if (!user) {
            res.status(401).json({
                message: 'Usuário não existe'
            });
        } else {
            user = await User.update({
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha,
                nivel_acesso: nivel_acesso,
            },{
                where: {
                    id: id
                }
            });
        
            res.status(200).json({
                user
            });
        }        
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}

const destroy = async (req, res) => {
    const id = req.params.id;

    let user = await User.findOne({
        where: {
            id: id
        }
    });

    if (!user) {
        res.status(401).json({
            message: 'Usuário não existe'
        });
    } else {
        await User.destroy({
            where: {
                id: id
            }
        });

        res.status(200).json({
            message: 'Remoção realizada com sucesso'
        });
    }
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}