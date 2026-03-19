import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * 获取 wiki 目录下的所有文件
 */
export function getWikiFiles() {
  const wikiDir = path.join(contentDirectory, 'wiki');
  
  if (!fs.existsSync(wikiDir)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(wikiDir);
  
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(wikiDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        id,
        ...data,
      };
    })
    .sort((a, b) => (a.order || 999) - (b.order || 999));
}

/**
 * 获取 wiki 单个文件内容
 */
export async function getWikiContent(id) {
  const fullPath = path.join(contentDirectory, 'wiki', `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // 使用 remark 将 markdown 转换为 HTML
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content);
  const htmlContent = processedContent.toString();
  
  return {
    id,
    htmlContent,
    ...data,
  };
}

/**
 * 获取 blog 目录下的所有文件
 */
export function getBlogFiles() {
  const blogDir = path.join(contentDirectory, 'blog');
  
  if (!fs.existsSync(blogDir)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(blogDir);
  
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        id,
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * 获取 blog 单个文件内容
 */
export async function getBlogContent(id) {
  const fullPath = path.join(contentDirectory, 'blog', `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // 使用 remark 将 markdown 转换为 HTML
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content);
  const htmlContent = processedContent.toString();
  
  return {
    id,
    htmlContent,
    ...data,
  };
}
