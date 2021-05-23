import Image from 'next/image';
import { ChatIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

const Post = ({ name, message, email, postImage, image, timestamp }) => {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <Image className="rounded-full" src={image} alt="post-img" width={40} height={40} />
                    <div>
                        <p className="font-medium">{name}</p>
                        {timestamp ? (
                            <p className="text-xs text-gray-400">
                                {new Date(timestamp?.toDate()).toLocaleDateString()}
                            </p>
                        ) : (
                            <p className="text-xs text-gray-400">Loading...</p>
                        )}
                    </div>
                </div>
                <p className="pt-4">{message}</p>
            </div>
            {postImage && (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image src={postImage} objectFit="cover" layout="fill" />
                </div>
            )}
            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                <div className="inputIcon rounded-none rounded-bl-2xl">
                    <ThumbUpIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                <div className="inputIcon">
                    <ChatIcon className="h-4" />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
                <div className="inputIcon rounded-none rounded-br-2xl">
                    <ShareIcon className="h-4" />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
            </div>
        </div>
    )
}

export default Post