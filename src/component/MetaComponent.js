import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaComponet = ({ title= "Best online shop", description= "Example description" }) => {
    return (
        <HelmetProvider>
            <title>{title}</title>
            <meta name="description" content={description} />
        </HelmetProvider>
    )
}

export default MetaComponet