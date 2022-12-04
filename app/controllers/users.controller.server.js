import userModel from '../models/user.js';
import { UserDisplayName } from '../utils/index.js';

export function DisplayProfileEditPage(req, res, next) {
    let id = req.params.id;

    userModel.findById(id, (err, user) => {
        if(err) {
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Your Profile', page: 'users/edit', user: user, displayName: UserDisplayName(req) });
    });
}


export function ProcessProfileEditPage(req, res, next) {
    let id = req.params.id;

    let newUser = userModel({
        _id: req.body.id,
        displayName: req.body.displayName,
        username: req.body.username,
        emailAddress: req.body.emailAddress   
    });

    userModel.updateOne({_id: id}, newUser, (err, User) => {
        if(err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/login')
    })
}