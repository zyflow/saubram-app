import { RNS3 } from 'react-native-aws3';
import {makeId} from "../utils/helpers";

export async function uploadToS3(url) {
    const options = {
        keyPrefix: "uploads/",
        bucket: "saubram-app",
        region: "eu-central-1",
        accessKey: "AKIA6F3FWZJNYUL6WQQO",
        secretKey: "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",
        successActionStatus: 201
    }

    let fileExtension = url.substr(url.lastIndexOf('.') + 1);
    console.log('ext', fileExtension)
    const file = {
        // uri can also be a file system path (i.e. file://)
        uri: url,
        name: makeId(20)  + '.' + fileExtension,
        type: "image/" + fileExtension
    }


    console.log('file...', file)

    let uploadedImageUrl = null
    try {
        await RNS3.put(file, options)
            .progress((e) => console.log(e.loaded / e.total))
            .then(response => {
                console.log('do i fucking get response?')
                // console.log(response)
                if (response.status !== 201) {

                    console.log('err')
                    console.log(response)
                    throw new Error("Failed to upload image to S3");
                }

                console.log('k...')
                console.log(response.body);
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
            });

        return uploadedImageUrl;
    } catch (e) {
        console.log('ze err')
        console.log(e)
    }


    console.log('deed is done ..')


  return null;
}
