import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * 序列化 content 数据，确保 Date 对象被转换为字符串
 */
function serializeContent(data) {
  const serialized = { ...data };
  for (const key of Object.keys(serialized)) {
    if (serialized[key] instanceof Date) {
      serialized[key] = serialized[key].toISOString().split('T')[0];
    }
  }
  return serialized;
}

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
        ...serializeContent(data),
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
  
  // 使用 remark 将 markdown 转换为 HTML（支持 GFM 语法）
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const htmlContent = processedContent.toString();
  
  return {
    id,
    htmlContent,
    ...serializeContent(data),
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
        ...serializeContent(data),
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
  
  // 使用 remark 将 markdown 转换为 HTML（支持 GFM 语法）
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const htmlContent = processedContent.toString();
  
  return {
    id,
    htmlContent,
    ...serializeContent(data),
  };
}
