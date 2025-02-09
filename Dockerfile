# ---- Stage 1: Build the Svelte app ----
    FROM node:18-alpine AS build

    # Create app directory
    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm ci
    
    # Copy the rest of your project files
    COPY . .
    
    # Build the project
    RUN npm run build
    
    # ---- Stage 2: Serve with Nginx ----
    FROM nginx:alpine
    
    # Copy build files from the previous stage
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Expose port 80
    EXPOSE 80
    
    # Launch Nginx in the foreground
    CMD ["nginx", "-g", "daemon off;"]
    