import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class FileService {
  private readonly country = this.configService.get('COUNTRY');
  private readonly edition = this.configService.get('EDITION');

  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CDN_CLOUD_NAME'),
      api_key: this.configService.get('CDN_API_KEY'),
      api_secret: this.configService.get('CDN_API_SECRET'),
    });
  }

  /**
   * Stores file by passing it to the cloud storage
   * @param file a file stream
   * @param {string} tags tags to give to the file
   * @param {string} folder folder in which to store the file
   * @param {object} cloudinary cloudinary functions
   * @returns {Promise} Promise that represents the file
   */
  store(file, folder: string, tags?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { tags, folder: `/osoc/${this.country}/${this.edition}/${folder}` },
        (err, image) => {
          if (image) {
            return resolve(image);
          }
          return reject(err);
        },
      );
      file.createReadStream().pipe(uploadStream);
    });
  }

  delete(publicId: string): Promise<any> {
    return (
      publicId &&
      new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (err, res) => {
          if (res && res.result === 'ok') {
            return resolve(res);
          }
          return reject(new Error(JSON.stringify(err || res)));
        });
      })
    );
  }
}
