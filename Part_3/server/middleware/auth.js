import jwt from 'jsonwebtoken';

//wnats to like a post
// click the like button => auth middleware(next) => like controller ...

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.spilt(" ")[1];
        const isCustomAuth = token.lenght < 500;
        
        let decodedData;

        if (token && isCustomAuth){
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();

    } catch (error) {
        console.log(error);
    }   
}

export default auth;