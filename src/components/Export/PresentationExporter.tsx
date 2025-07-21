import React, { useState } from 'react';
import { Download, FileText, Image, Video, Loader2 } from 'lucide-react';
import { Module } from '../../types';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PresentationExporterProps {
  module: Module;
  onExportComplete?: (success: boolean, format: string) => void;
}

const PresentationExporter: React.FC<PresentationExporterProps> = ({ 
  module, 
  onExportComplete 
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<'pdf' | 'images' | 'html'>('pdf');

  const exportToPDF = async () => {
    setIsExporting(true);
    
    try {
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Page de titre
      pdf.setFontSize(24);
      pdf.text(module.title, pageWidth / 2, 30, { align: 'center' });
      
      pdf.setFontSize(14);
      pdf.text(module.description, pageWidth / 2, 45, { align: 'center' });
      
      pdf.setFontSize(12);
      pdf.text(`Durée: ${Math.floor(module.duration / 60)}h${module.duration % 60}min`, pageWidth / 2, 60, { align: 'center' });
      pdf.text(`Certification: ${module.certification}`, pageWidth / 2, 70, { align: 'center' });
      
      // Objectifs
      pdf.setFontSize(16);
      pdf.text('Objectifs pédagogiques:', 20, 90);
      
      pdf.setFontSize(12);
      let yPos = 105;
      module.objectives.forEach((objective, index) => {
        const lines = pdf.splitTextToSize(`${index + 1}. ${objective}`, pageWidth - 40);
        pdf.text(lines, 25, yPos);
        yPos += lines.length * 7;
      });
      
      // Prérequis
      yPos += 10;
      pdf.setFontSize(16);
      pdf.text('Prérequis:', 20, yPos);
      yPos += 15;
      
      pdf.setFontSize(12);
      module.prerequisites.forEach((prereq, index) => {
        const lines = pdf.splitTextToSize(`${index + 1}. ${prereq}`, pageWidth - 40);
        pdf.text(lines, 25, yPos);
        yPos += lines.length * 7;
      });
      
      // Diapositives
      for (let i = 0; i < module.slides.length; i++) {
        const slide = module.slides[i];
        pdf.addPage();
        
        // Titre de la diapositive
        pdf.setFontSize(20);
        pdf.text(slide.title, pageWidth / 2, 25, { align: 'center' });
        
        // Contenu
        pdf.setFontSize(14);
        const contentLines = pdf.splitTextToSize(slide.content, pageWidth - 40);
        let contentY = 45;
        
        contentLines.forEach((line: string) => {
          if (contentY > pageHeight - 30) {
            pdf.addPage();
            contentY = 25;
          }
          pdf.text(line, 20, contentY);
          contentY += 8;
        });
        
        // Notes du formateur
        if (slide.notes) {
          contentY += 15;
          if (contentY > pageHeight - 50) {
            pdf.addPage();
            contentY = 25;
          }
          
          pdf.setFontSize(12);
          pdf.setTextColor(100, 100, 100);
          pdf.text('Notes du formateur:', 20, contentY);
          contentY += 10;
          
          const notesLines = pdf.splitTextToSize(slide.notes, pageWidth - 40);
          notesLines.forEach((line: string) => {
            if (contentY > pageHeight - 20) {
              pdf.addPage();
              contentY = 25;
            }
            pdf.text(line, 20, contentY);
            contentY += 6;
          });
          
          pdf.setTextColor(0, 0, 0);
        }
        
        // Numéro de diapositive
        pdf.setFontSize(10);
        pdf.text(`Diapositive ${i + 1} / ${module.slides.length}`, pageWidth - 40, pageHeight - 10);
      }
      
      // Sauvegarde
      pdf.save(`${module.title.replace(/\s+/g, '_')}.pdf`);
      onExportComplete?.(true, 'PDF');
      
    } catch (error) {
      console.error('Erreur lors de l\'export PDF:', error);
      onExportComplete?.(false, 'PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const exportToImages = async () => {
    setIsExporting(true);
    
    try {
      // Créer un conteneur temporaire pour chaque diapositive
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.width = '1920px';
      tempContainer.style.height = '1080px';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.padding = '60px';
      tempContainer.style.fontFamily = 'Inter, sans-serif';
      document.body.appendChild(tempContainer);
      
      const images: string[] = [];
      
      for (let i = 0; i < module.slides.length; i++) {
        const slide = module.slides[i];
        
        // Créer le contenu de la diapositive
        tempContainer.innerHTML = `
          <div style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
            <h1 style="font-size: 48px; font-weight: bold; color: #1f2937; margin-bottom: 40px; text-align: center;">
              ${slide.title}
            </h1>
            <div style="font-size: 24px; line-height: 1.6; color: #374151; white-space: pre-line; text-align: center;">
              ${slide.content}
            </div>
            <div style="position: absolute; bottom: 20px; right: 20px; font-size: 16px; color: #6b7280;">
              ${i + 1} / ${module.slides.length}
            </div>
          </div>
        `;
        
        // Capturer l'image
        const canvas = await html2canvas(tempContainer, {
          width: 1920,
          height: 1080,
          scale: 1,
          backgroundColor: '#ffffff'
        });
        
        images.push(canvas.toDataURL('image/png'));
      }
      
      // Télécharger les images
      images.forEach((imageData, index) => {
        const link = document.createElement('a');
        link.download = `${module.title.replace(/\s+/g, '_')}_slide_${(index + 1).toString().padStart(2, '0')}.png`;
        link.href = imageData;
        link.click();
      });
      
      document.body.removeChild(tempContainer);
      onExportComplete?.(true, 'Images');
      
    } catch (error) {
      console.error('Erreur lors de l\'export images:', error);
      onExportComplete?.(false, 'Images');
    } finally {
      setIsExporting(false);
    }
  };

  const exportToHTML = async () => {
    setIsExporting(true);
    
    try {
      const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${module.title}</title>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
        }
        .presentation {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .slide {
            background: white;
            margin: 20px 0;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            page-break-inside: avoid;
        }
        .slide-title {
            font-size: 28px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 20px;
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 10px;
        }
        .slide-content {
            font-size: 16px;
            line-height: 1.6;
            color: #374151;
            white-space: pre-line;
        }
        .slide-notes {
            margin-top: 20px;
            padding: 15px;
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            border-radius: 4px;
        }
        .slide-number {
            text-align: right;
            color: #6b7280;
            font-size: 14px;
            margin-top: 20px;
        }
        @media print {
            .slide {
                page-break-after: always;
            }
        }
    </style>
</head>
<body>
    <div class="presentation">
        <div class="header">
            <h1>${module.title}</h1>
            <p>${module.description}</p>
            <p><strong>Durée:</strong> ${Math.floor(module.duration / 60)}h${module.duration % 60}min | 
               <strong>Certification:</strong> ${module.certification}</p>
        </div>
        
        ${module.slides.map((slide, index) => `
            <div class="slide">
                <h2 class="slide-title">${slide.title}</h2>
                <div class="slide-content">${slide.content}</div>
                ${slide.notes ? `
                    <div class="slide-notes">
                        <strong>Notes du formateur:</strong><br>
                        ${slide.notes}
                    </div>
                ` : ''}
                <div class="slide-number">Diapositive ${index + 1} / ${module.slides.length}</div>
            </div>
        `).join('')}
    </div>
</body>
</html>`;
      
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${module.title.replace(/\s+/g, '_')}.html`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      
      onExportComplete?.(true, 'HTML');
      
    } catch (error) {
      console.error('Erreur lors de l\'export HTML:', error);
      onExportComplete?.(false, 'HTML');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExport = () => {
    switch (exportFormat) {
      case 'pdf':
        exportToPDF();
        break;
      case 'images':
        exportToImages();
        break;
      case 'html':
        exportToHTML();
        break;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Exporter la Présentation
      </h3>
      
      <div className="space-y-4">
        {/* Sélection du format */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Format d'export
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setExportFormat('pdf')}
              className={`p-3 rounded-lg border-2 transition-all ${
                exportFormat === 'pdf'
                  ? 'border-electric-500 bg-electric-50 dark:bg-electric-900/20'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
              }`}
            >
              <FileText className="h-6 w-6 mx-auto mb-2 text-red-600" />
              <div className="text-sm font-medium">PDF</div>
              <div className="text-xs text-gray-500">Document complet</div>
            </button>
            
            <button
              onClick={() => setExportFormat('images')}
              className={`p-3 rounded-lg border-2 transition-all ${
                exportFormat === 'images'
                  ? 'border-electric-500 bg-electric-50 dark:bg-electric-900/20'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
              }`}
            >
              <Image className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <div className="text-sm font-medium">Images</div>
              <div className="text-xs text-gray-500">PNG par slide</div>
            </button>
            
            <button
              onClick={() => setExportFormat('html')}
              className={`p-3 rounded-lg border-2 transition-all ${
                exportFormat === 'html'
                  ? 'border-electric-500 bg-electric-50 dark:bg-electric-900/20'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
              }`}
            >
              <Video className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm font-medium">HTML</div>
              <div className="text-xs text-gray-500">Page web</div>
            </button>
          </div>
        </div>

        {/* Informations sur l'export */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            Contenu à exporter :
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• {module.slides.length} diapositives</li>
            <li>• Notes du formateur incluses</li>
            <li>• Objectifs et prérequis</li>
            <li>• Informations du module</li>
          </ul>
        </div>

        {/* Bouton d'export */}
        <button
          onClick={handleExport}
          disabled={isExporting}
          className="w-full flex items-center justify-center space-x-2 bg-electric-600 hover:bg-electric-700 disabled:bg-electric-400 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          {isExporting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Export en cours...</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5" />
              <span>Exporter en {exportFormat.toUpperCase()}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PresentationExporter;