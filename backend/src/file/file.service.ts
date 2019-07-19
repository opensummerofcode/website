import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { v2 as cloudinary } from 'cloudinary';
import { Stream } from 'stream';

@Injectable()
export class FileService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CDN_CLOUD_NAME'),
      api_key: this.configService.get('CDN_API_KEY'),
      api_secret: this.configService.get('CDN_API_SECRET'),
    });
  }

  /**
   * Stores file by passing it to the cloud storage
   * @param {Stream} file a file stream
   * @param {string} tags tags to give to the file
   * @param {string} folder folder in which to store the file
   * @param {object} cloudinary cloudinary functions
   * @param {boolean} generated flag that tells whether the file has been generated by the backend or not
   * @returns {Promise} Promise that represents the file
   */
  store(file: Stream, folder: string, tags: string): Promise<any> {
    const country = this.configService.get('COUNTRY');
    const edition = this.configService.get('EDITION');
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { tags, folder: `/osoc/${country}/${edition}/${folder}` },
        (err, image) => {
          if (image) {
            return resolve(image);
          }
          return reject(err);
        },
      );
      file.pipe(uploadStream);
    });
  }
}