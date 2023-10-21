const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITER_URL),
    appwriteProjectId : String(import.meta.env.VITE_PROJECT_ID),
    appwriteDataBaseId : String(import.meta.env.VITE_DATABASE_ID),
    appwriteBucketId : String(import.meta.env.VITE_BUCKET_ID),
    appwriteCollectionId : String(import.meta.env.VITE_COLLECTION_ID)
}

export default config