"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe usuario con el id ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuaro con ese email'
            });
        }
        const usuario = yield usuario_1.default.create(body);
        ;
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con administrador'
        });
    }
    res.json({
        msg: 'postUsuario',
        body
    });
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe usuario con el id'
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con administrador'
        });
    }
    res.json({
        msg: 'putUsuario',
        body,
        id
    });
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No existe usuario con el id'
        });
    }
    yield usuario.update({ estado: false });
    //await usuario.destroy()
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy91c3Vhcmlvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBd0M7QUFFakMsTUFBTSxXQUFXLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFN0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFBO0FBSlksUUFBQSxXQUFXLGVBSXZCO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFNUQsTUFBTSxFQUFDLEVBQUUsRUFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFeEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzQyxJQUFHLE9BQU8sRUFBQztRQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDckI7U0FBSTtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEdBQUcsRUFBRSwrQkFBZ0MsRUFBRyxFQUFFO1NBQzdDLENBQUMsQ0FBQztLQUNOO0FBRUwsQ0FBQyxDQUFBLENBQUE7QUFkWSxRQUFBLFVBQVUsY0FjdEI7QUFFTSxNQUFNLFdBQVcsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUU3RCxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsR0FBRyxDQUFDO0lBRW5CLElBQUc7UUFDQyxNQUFNLFdBQVcsR0FBRyxNQUFNLGlCQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3RDLEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUUs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