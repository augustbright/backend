import * as uuid from 'uuid';
import path from 'path';
import fs from 'fs';

class FilesService {
    /**
     * 
     * @param {File} file 
     */
    async saveJpg(file) {
        try {
            const filename = uuid.v4() + '.jpg';
            const staticDir = path.resolve('static');
            if (fs.ex)
            const pathname = path.resolve('static', filename);
            
            await file.mv(pathname);
            return filename;
        } catch (e) {
            console.error(e);
        }
    }
};

export default new FilesService();