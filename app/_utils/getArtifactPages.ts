import fs from 'fs';
import path from 'path';

export function getArtifactFolders() {
    const artifactsPath = path.join(process.cwd(), 'app', 'artifacts');
    return fs.readdirSync(artifactsPath).filter((file) =>
             !file.startsWith('_') && fs.statSync(path.join(artifactsPath, file)).isDirectory()
    );
}