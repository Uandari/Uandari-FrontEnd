
import UploadButton from '@components/basic/uploadButton';
import Topbar from '@components/layout/topbar';

type DynamicUploadPageProps = {
    topbarTitle: string;
    topbarVariant?: 'primary' | 'secondary';
    topbarUnderline: boolean;
};

export default function DynamicUploadPage({ topbarTitle, topbarVariant, topbarUnderline }: DynamicUploadPageProps) {
    return (
        <div className="flex flex-1 border">
            <div className="grid grid-rows-6 grid-cols-1 bg-white w-[100%] ">
                <Topbar title={topbarTitle} variant={topbarVariant} underline={topbarUnderline} />
                <div className="my-20">
                    <UploadButton />
                </div>
            </div>
        </div>
    );
}
