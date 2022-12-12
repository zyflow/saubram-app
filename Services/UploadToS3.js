import { RNS3 } from 'react-native-aws3';
import {makeId} from "../utils/helpers";

export async function uploadToS3(url) {
    const options = {
        keyPrefix: "uploads/",
        bucket: "saubram-app",
        region: "eu-central-1",
        accessKey: process.env.AMAZON_KEY,
        secretKey: process.env.AMAZON_SECRET,
        successActionStatus: 201
    }

    let fileExtension = url.substr(url.lastIndexOf('.') + 1);
    const file = {
        // uri can also be a file system path (i.e. file://)
        uri: url,
        name: makeId(20)  + '.' + fileExtension,
        type: "image/" + fileExtension
    }

    let uploadedImageUrl = null
    try {
        await RNS3.put(file, options)
            .progress((e) => console.log(e.loaded / e.total))
            .then(response => {
                if (response.status !== 201) {

                    throw new Error("Failed to upload image to S3");
                }

                uploadedImageUrl = response.body.postResponse.location
                /**
                 * {
                 *   postResponse: {
                 *     bucket: "your-bucket",
                 *     etag : "9f620878e06d28774406017480a59fd4",
                 *     key: "uploads/image.png",
                 *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
                 *   }
                 * }
                 */
            }).catch(e => {
                console.log('some problem', e)
            })

        return uploadedImageUrl;
    } catch (e) {
        console.log('ze err')
        console.log(e)
    }




  return null;
}
